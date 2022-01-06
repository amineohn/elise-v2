import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { Example } from "../../libs/types";
import { Firebase } from "../../libs/firebase";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Example>,
  han: NextApiHandler<NextApiHandler>
) {
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  const fire = new Firebase();
  const name = req.body.name;
  if (name) {
    res
      .status(200)
      .json({ name: name as string, error: "", status: 1, success: true });
    fire.collection("cached").add({
      name: name,
    });
  } else {
    res.status(400).json({
      name: "",
      error: "name is required",
      status: 0,
      success: false,
    });
  }
  res.status(200).end();
}
