import { rest } from 'msw';

const pictureBedApiPost = rest.post(
  '/api/v1/picture-bed',
  (req, res, ctx) => {
    const body = req.body;
    if (typeof body !== 'object' || body === null) {
      return res(ctx.status(400));
    }
    const file = body.file;
    if (!(file instanceof File)) {
      return res(ctx.status(400));
    }
    const url = URL.createObjectURL(file);
    const result = res(
      ctx.status(201),
      ctx.json({ url }),
    )
    console.log('[Mock] Get', req, 'return', result);
    return result;
  }
);

export default pictureBedApiPost;