/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { WebPModule } from '../../codecs/webp/enc/webp_enc';
// @ts-ignore
import wasmUrl from '../../codecs/webp/enc/webp_enc.wasm';

// @ts-ignore
function initEmscriptenModule<T extends EmscriptenWasm.Module>(
  // @ts-ignore
  moduleFactory: EmscriptenWasm.ModuleFactory<T>,
  wasmUrl: string,
  workerUrl?: string,
): Promise<T> {
  return moduleFactory({
    // Just to be safe, don't automatically invoke any wasm functions
    noInitialRun: true,
    locateFile: (url: string) => {
      if (url.endsWith('.wasm')) return wasmUrl;
      if (url.endsWith('.worker.js')) return workerUrl!;
      throw Error('Unknown url in locateFile ' + url);
    },
  });
}

export interface EncodeOptions {
  quality: number;
  target_size: number;
  target_PSNR: number;
  method: number;
  sns_strength: number;
  filter_strength: number;
  filter_sharpness: number;
  filter_type: number;
  partitions: number;
  segments: number;
  pass: number;
  show_compressed: number;
  preprocessing: number;
  autofilter: number;
  partition_limit: number;
  alpha_compression: number;
  alpha_filtering: number;
  alpha_quality: number;
  lossless: number;
  exact: number;
  image_hint: number;
  emulate_jpeg_size: number;
  thread_level: number;
  low_memory: number;
  near_lossless: number;
  use_delta_palette: number;
  use_sharp_yuv: number;
}

// import wasmUrl from 'url:codecs/webp/enc/webp_enc.wasm';

let emscriptenModule: Promise<WebPModule>;

async function init() {
  const webpEncoder = await import('../../codecs/webp/enc/webp_enc.js');
  return initEmscriptenModule(webpEncoder.default, wasmUrl);
}

export default async function encode(
  data: ImageData,
  options: EncodeOptions,
): Promise<ArrayBuffer> {
  if (!emscriptenModule) emscriptenModule = init();

  const module = await emscriptenModule;
  const result = module.encode(data.data, data.width, data.height, options);

  if (!result) throw new Error('Encoding error.');

  return result.buffer;
}
