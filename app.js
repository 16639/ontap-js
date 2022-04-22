import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ProductRoute from "./routes/Books";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", ProductRoute)


mongoose.connect('mongodb://localhost:27017/ontap')
.then(() => console.log("kết nối thành công"))
.catch((error) => console.log("kết nối thất bại"));

const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})