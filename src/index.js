import express from "express";
import userRouter from "./user/user.router.js";
import productRouter from "./product/product.router.js"
import { logRequest } from "./middleware.js";
import { errorResponder } from "./error.middleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logRequest);
app.use(productRouter);
app.use(userRouter);
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
