import express from "express";
import { errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

dotenv.config();

const port = 4000;
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/employees", userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
