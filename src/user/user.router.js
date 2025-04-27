import express, { request } from "express";
import db from "../db/index.js";
import { eq } from "drizzle-orm";
import { users, products } from "../db/schema.js";

const router = express.Router();

router.post("/users", async (request, response) => {
  const { body } = request;
  await db.insert(users).values(body);
  return response.sendStatus(201);
});

router.get("/users", async (request, response) => {
  const users = await db.query.users.findMany();
  return response.json(users);
});

router.get("/users/:id/products", async (request, response) => {
  const { id } = request.params;
  const userProducts = await db.query.products.findMany({
    where: eq(products.userId, +id)
  });
  return response.json(userProducts);
});

export default router;
