import { faker } from "@faker-js/faker";
import { describe, it } from "vitest";

describe("group", () => {
  it("should", () => {
    console.log({
      name: faker.commerce.productName(),
      price: faker.commerce.price({ min: 1, max: 100 }),
    });
  });
});
