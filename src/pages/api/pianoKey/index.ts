import { NextApiRequest, NextApiResponse } from "next";
import mongoDb from "../../../lib/mongoDb";
import PianoKeys from "@/model/Piano.model";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await mongoDb();

  switch (method) {
    case "GET":
      try {
        const key = await PianoKeys.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json(key);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const key = await PianoKeys.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: key });
      } catch (error) {
        res.status(400).json("there is an error");
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
export default handler;
