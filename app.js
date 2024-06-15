import Express from "express";
import { connection } from "./db.js";

import { authRouter } from "./routes/auth.js";
import { userRouter } from "./routes/user.js";
import { cartRouter } from "./routes/cart.js";

import 'dotenv/config';

connection.authenticate()
    .then(() => console.log("Database has been connected successfully."))
    .catch((err) => console.log("Unable to connect to database: ", err))

const app = Express();
const port = process.env.PORT || 3030;

app.use(Express.json());

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Bem vindo papito" });
});

app.use("/auth", authRouter);
app.use("/user/", userRouter);
app.use("/cart/", cartRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});