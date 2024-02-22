import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./connect.js";

import cardRouter from "./Routers/card.router.js";
 
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/card", cardRouter);

// app.get('/', (req, res) => {
//     res.send({ message: "1234567890" });
// });

const startServer = () => {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("server started"));
}

startServer();