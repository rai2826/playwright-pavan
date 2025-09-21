import { test, expect, request } from "@playwright/test";
import Ajv from "ajv";

const ajv = new Ajv();

const productSchema = {
  type: "object",
  required: ["id", "title", "price", "category", "description"],
  properties: {
    id: { type: "number" },
    title: { type: "string" },
    price: { type: "number" },
    category: { type: "string" },
    description: { type: "string" },
  },
};

test("GET /products/1 returns valid product", async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.get("https://fakestoreapi.com/products/1");

  expect(response.status()).toBe(200);

  const body = await response.json();

  // Validate required keys
  for (const key of ["id", "title", "price", "category", "description"]) {
    expect(body).toHaveProperty(key);
  }

  // Validate schema
  const validate = ajv.compile(productSchema);
  const valid = validate(body);
  expect(valid).toBe(true);

  // Log product title and price
  console.log(`Product: ${body.title}, Price: $${body.price}`);
});
