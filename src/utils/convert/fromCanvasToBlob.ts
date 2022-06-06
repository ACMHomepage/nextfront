const fromCanvasToBlob = async (canvas: HTMLCanvasElement, type: string) => {
  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject('Cannot convert to blob');
    }, type, 0.7);
  });
}

export default fromCanvasToBlob;