//@ts-ignore
const _worker = new Worker(new URL('./worker.ts', import.meta.url));
console.log(_worker);

async function loadImage(src) {
  // Load image
  const img = document.createElement('img');
  img.src = src;
  await new Promise((resolve) => (img.onload = resolve));
  // Make canvas same size as image
  const canvas = document.createElement('canvas');
  [canvas.width, canvas.height] = [img.width, img.height];
  // Draw image onto canvas
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, img.width, img.height);
}

const fileInput = document.querySelector('input');
fileInput.addEventListener('change', async () => {
  if (fileInput.files.length) {
    const blobUrl = URL.createObjectURL(fileInput.files[0]);

    _worker.postMessage(await loadImage(blobUrl));
  }
});

_worker.addEventListener('message', (e) => {
  const blob = new Blob([e.data], { type: 'image/webp' });

  const blobURL = URL.createObjectURL(blob);
  const img = document.createElement('img');
  img.src = blobURL;
  document.body.appendChild(img);
});

console.log(new URL('./worker.ts', import.meta.url));
