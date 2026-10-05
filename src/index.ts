import { fetchProductCatalog } from "./apiSimulator.ts";

fetchProductCatalog()
  .then((products) => {
    console.log("Product Catalog:", products);
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });