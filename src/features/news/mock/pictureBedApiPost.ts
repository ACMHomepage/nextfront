import { rest } from 'msw';

import fromFileToDataUrl from 'src/utils/convert/fromFileToDataURL';
import { fileForMock } from '../apis/useUploadPicture';

const pictureBedApiPost = rest.post(
  '/api/v1/picture-bed',
  async (req, res, ctx) => {
    const body = req.body;
    if (typeof body !== 'object' || body === null) {
      return res(ctx.status(400));
    }
    // TODO: This is a bug of msw.
    //       More infomation: https://github.com/mswjs/msw/discussions/1272
    // const file = body.file;
    const file = fileForMock;
    if (!(file instanceof File)) {
      return res(ctx.status(400));
    }
    console.log('[Mock] The req:');
    console.log(req);

    const url: string = await fromFileToDataUrl(file);
    console.log('[Mock] The data URL of file');
    console.log(url);
    const result = res(
      ctx.status(201),
      ctx.json({ url }),
    )
    console.log('[Mock] Get', req, 'return', result);
    return result;
  }
);

export default pictureBedApiPost;