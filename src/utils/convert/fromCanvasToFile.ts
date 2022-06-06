import fromCanvasToBlob from "./fromCanvasToBlob";

const fromCanvasToFile = async (canvas: HTMLCanvasElement, filename: string) => {
  const fileType = 'image/jpeg';
  const blob = await fromCanvasToBlob(canvas, fileType);
  return new File([blob], filename, { type: fileType });
}

export default fromCanvasToFile;