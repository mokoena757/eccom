import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import cors from 'cors'

dotenv.config();

mongoose 
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(cors({
  origin: 'https://frontend-blond-six.vercel.app', // Adjust this to the allowed origin(s)
  methods: ['GET', 'POST'],
 credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use("/api/upload", uploadRouter);
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

//const __dirname = path.resolve();
//app.use(express.static(path.join(__dirname, "../frontend/build")));
//app.get("*", (req, res) =>
  //res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
//);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
