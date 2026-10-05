import { fetchProductCatalog, fetchProductReviews, fetchSalesReport} from "./apiSimulator.ts";

fetchProductCatalog()
    .then((products) => {
        console.log("\n=== PRODUCTS ===");
        products.forEach((product) => {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
        });

        const reviewPromises = products.map((product) =>
            fetchProductReviews(product.id).then((reviews) => ({
                product,
                reviews,
            }))
        ); 

        return Promise.all(reviewPromises);

    })
    .then((productReviews) => {
        console.log("\n=== REVIEWS ===");
        productReviews.forEach(({ product, reviews }) => {
            console.log(`\nReviews for ${product.name}:`);
            reviews.forEach((review) => {
                console.log(`Rating: ${review.rating}, Comment: ${review.comment}`);
            });
        });
    });

