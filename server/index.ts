import { config } from "dotenv";
config();

import express from "express";

import { userController } from "./controller";

export default express()
    .use(userController)

    .listen(process.env.PORT, () => console.log(`Server is up and running @ http://localhost:${process.env.PORT}/`))
