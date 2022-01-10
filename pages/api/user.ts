import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../libs/types";
import { Firebase } from "../../libs/firebase";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const fire = new Firebase();
  if (fire.isUser()) {
    fire.signOut();
  }
  if (fire.isConnected()) {
    res.status(200).json({
      name: `${fire.userName()}`,
      email: `${fire.email()}`,
      photoURL: `${fire.photoUrl()}`,
      validator: {
        error: "",
        success: "",
      },
    });
  } else {
    res.status(200).json({
      name: `${fire.userName() ? fire.userName() : `Non défini`}`,
      email: `${fire.email() ? fire.email() : `Non défini`}`,
      photoURL: `${
        fire.photoUrl()
          ? fire.photoUrl()
          : `https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg`
      }`,
      validator: {
        error: "",
        success: "",
      },
    });
  }
}
