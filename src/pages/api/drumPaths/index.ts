import { NextApiRequest, NextApiResponse } from "next";
import mongoDb from "../../../lib/mongoDb";
import DrumsKeys from "@/model/Drums.model";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // get what is inside data base
  const { method } = req;

  await mongoDb();

  switch (method) {
    case "GET":
      try {
        const key = await DrumsKeys.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json(key);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const key = await DrumsKeys.create(
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
