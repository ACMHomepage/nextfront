import fromFileToDataUrl from "src/utils/convert/fromFileToDataURL";

let fileForMock: File | null = null;

const useUploadPicture = () => {
  const uploadPicture = async (picture: File) => {
    const data = new FormData();
    data.append('file', picture);

    fileForMock = picture;
    const res = await fetch('/api/v1/picture-bed', {
      method: 'POST',
      body: data,
    });
    const { url } = await res.json() as { url: string };
    return url;
  };
  return uploadPicture;
};

export default useUploadPicture;

export { fileForMock };