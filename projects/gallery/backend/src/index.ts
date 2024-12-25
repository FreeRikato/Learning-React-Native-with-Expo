import express, { Application, Request, Response } from "express";
import imageURL from "./utils/imageURLData";
import cors from "cors";

const app: Application = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hi there");
});

app.get("/api/v1/images", (req: Request, res: Response) => {
  res.json({ imageData: imageURL });
});

app.listen(3000, () => {
  console.log("server running successfully");
});
