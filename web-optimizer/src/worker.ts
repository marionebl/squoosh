// export type ProcessorWorkerApi = typeof workerApi;
// 'as any' to work around the way our client code has insight into worker code

async function handleImage(imageData: ImageData) {
  const { timed } = await import('./timed');
  const webpEncode = (await import('./webpEncode')).default;
  const resize = (await import('./resize')).default;

  const resizedImageData = await resize(imageData, {
    width: 1600,
    height: (1600 / imageData.width) * imageData.height,
    method: 'lanczos3',
    fitMethod: 'stretch',
    premultiply: true,
    linearRGB: true,
  });

  const webpImageData = await webpEncode(resizedImageData, {
    quality: 70,
    target_size: 0,
    target_PSNR: 0,
    method: 4,
    sns_strength: 50,
    filter_strength: 60,
    filter_sharpness: 0,
    filter_type: 1,
    partitions: 0,
    segments: 4,
    pass: 1,
    show_compressed: 0,
    preprocessing: 0,
    autofilter: 0,
    partition_limit: 0,
    alpha_compression: 1,
    alpha_filtering: 1,
    alpha_quality: 100,
    lossless: 0,
    exact: 0,
    image_hint: 0,
    emulate_jpeg_size: 0,
    thread_level: 0,
    low_memory: 0,
    near_lossless: 100,
    use_delta_palette: 0,
    use_sharp_yuv: 0,
  });

  return webpImageData;

  // const workerApi = {
  //   webpEncode(
  //     ...args: Parameters<typeof webpEncode>
  //   ): ReturnType<typeof webpEncode> {
  //     return timed('webpEncode', () => webpEncode(...args));
  //   },
  //   resize(
  //     ...args: Parameters<typeof resize>
  //   ): ReturnType<typeof resize> {
  //     return timed('resize', () => resize(...args));
  //   },
  // };
}

self.addEventListener('message', async (e) => {
  //@ts-ignore
  self.postMessage(await handleImage(e.data));
});
