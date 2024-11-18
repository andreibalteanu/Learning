import { rest } from "msw";

export const handlers = [
  rest.post("/test", async (req, res, ctx) => {
    const body = await req.json();
    console.log("Mock server received body:", body);

    return res(
      ctx.status(200),
      ctx.json({ message: "Post request received", data: body })
    );
  }),
];
