import type { WorkerResizeOptions } from './meta';
import { workerResizeMethods } from './meta';
import {
  resize as wasmResize,
  __wbindgen_free,
  __wbindgen_malloc,
  memory,
} from '../../codecs/resize/pkg/squoosh_resize_bg';

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

export function getContainOffsets(
  sw: number,
  sh: number,
  dw: number,
  dh: number,
) {
  const currentAspect = sw / sh;
  const endAspect = dw / dh;

  if (endAspect > currentAspect) {
    const newSh = sw / endAspect;
    const newSy = (sh - newSh) / 2;
    return { sw, sh: newSh, sx: 0, sy: newSy };
  }

  const newSw = sh * endAspect;
  const newSx = (sw - newSw) / 2;
  return { sh, sw: newSw, sx: newSx, sy: 0 };
}

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
  if (
    cachegetUint8Memory0 === null ||
    cachegetUint8Memory0.buffer !== memory.buffer
  ) {
    cachegetUint8Memory0 = new Uint8Array(memory.buffer);
  }
  return cachegetUint8Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1);
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
  if (
    cachegetInt32Memory0 === null ||
    cachegetInt32Memory0.buffer !== memory.buffer
  ) {
    cachegetInt32Memory0 = new Int32Array(memory.buffer);
  }
  return cachegetInt32Memory0;
}

function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

/**
 * @param {Uint8Array} input_image
 * @param {number} input_width
 * @param {number} input_height
 * @param {number} output_width
 * @param {number} output_height
 * @param {number} typ_idx
 * @param {boolean} premultiply
 * @param {boolean} color_space_conversion
 * @returns {Uint8Array}
 */
export function resizeWasmBridge(
  input_image,
  input_width,
  input_height,
  output_width,
  output_height,
  typ_idx,
  premultiply,
  color_space_conversion,
) {
  var ptr0 = passArray8ToWasm0(input_image, __wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  wasmResize(
    8,
    ptr0,
    len0,
    input_width,
    input_height,
    output_width,
    output_height,
    typ_idx,
    premultiply,
    color_space_conversion,
  );
  var r0 = getInt32Memory0()[8 / 4 + 0];
  var r1 = getInt32Memory0()[8 / 4 + 1];
  var v1 = getArrayU8FromWasm0(r0, r1).slice();
  __wbindgen_free(r0, r1 * 1);
  return v1;
}

function crop(
  data: ImageData,
  sx: number,
  sy: number,
  sw: number,
  sh: number,
): ImageData {
  const inputPixels = new Uint32Array(data.data.buffer);

  // Copy within the same buffer for speed and memory efficiency.
  for (let y = 0; y < sh; y += 1) {
    const start = (y + sy) * data.width + sx;
    inputPixels.copyWithin(y * sw, start, start + sw);
  }

  return new ImageData(
    new Uint8ClampedArray(inputPixels.buffer.slice(0, sw * sh * 4)),
    sw,
    sh,
  );
}

export default async function resize(
  data: ImageData,
  opts: WorkerResizeOptions,
): Promise<ImageData> {
  let input = data;

  if (opts.fitMethod === 'contain') {
    const { sx, sy, sw, sh } = getContainOffsets(
      data.width,
      data.height,
      opts.width,
      opts.height,
    );
    input = crop(
      input,
      Math.round(sx),
      Math.round(sy),
      Math.round(sw),
      Math.round(sh),
    );
  }

  const result = resizeWasmBridge(
    new Uint8Array(input.data.buffer),
    input.width,
    input.height,
    opts.width,
    opts.height,
    workerResizeMethods.indexOf('lanczos3'),
    opts.premultiply,
    opts.linearRGB,
  );

  return new ImageData(
    new Uint8ClampedArray(result.buffer),
    opts.width,
    opts.height,
  );
}
