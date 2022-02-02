import type { NextApiRequest, NextApiResponse } from "next";
import { Firebase } from "../../libs/firebase";
import fs from "fs";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  const fire = new Firebase();
  setInterval(() => {
    fire.collection("test").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total = mapped.reduce((acc, cur) => acc + cur, 0);
      const stringifyJson = data.map((item) => item.value);

      try {
        fs.chmodSync(`./cache/data.json`, 0o777);
        fs.writeFileSync(
          `./cache/data.json`,
          JSON.stringify(
            {
              data: stringifyJson,
              total: total + "kg",
            },
            null,
            2
          )
        );
      } catch (e) {
        console.log(e);
      }
    });
    fire.collection("test2").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data().value,
        ...doc.data(),
      }));
      const mapped = data.map((item) => item.value * 1);
      const total = mapped.reduce((acc, cur) => acc + cur, 0);
      const stringifyJson = data.map((item) => item.value);
      try {
        fs.chmodSync(`./cache/data2.json`, 0o777);
        fs.writeFileSync(
          `./cache/data2.json`,
          JSON.stringify(
            {
              data: stringifyJson,
              total: total + "kg",
            },
            null,
            2
          )
        );
      } catch (e) {
        console.log(e);
      }
    });
  }, 15000); // 15s

  res.status(200).json({
    name: "Hello, there's is a api cache",
    key: false,
  });
}
