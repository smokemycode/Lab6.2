import { NetworkError } from "./errors.ts";

export interface Product {
  id: number;
  name: string;
  price: number;
}

export const fetchProductCatalog = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
            { id: 3, name: "Keyboard", price: 80 },
        ]);
        } else {
        reject(new NetworkError("Failed to fetch product catalog"));
        }
    }, 1000);
    });
};

export interface Review {
  productId: number;
  rating: number;
  comment: string;
}

export const fetchProductReviews = (productId: number): Promise<Review[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { productId, rating: 5, comment: "Great product!" },
            { productId, rating: 4, comment: "Good value for money." },
        ]);
        } else {
        reject(new NetworkError(`Failed to fetch reviews for product ID: ${productId}`));
        }
    }, 1500);
    });
};