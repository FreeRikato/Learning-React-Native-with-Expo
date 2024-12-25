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

app.get("/api/v1/image/:photoId", (req: Request, res: Response) => {
  const photoId = req.params.photoId;
  res.json({
    imageLink: imageURL[Number(photoId) - 1],
  });
});

app.listen(3000, () => {
  console.log("server running successfully");
});
