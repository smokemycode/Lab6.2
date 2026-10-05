import { NetworkError } from "./errors.ts";

export interface Product {
  id: number;
  name: string;
  price: number;
}

export const fetchProductCatalog = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        let products: Product[] = [
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
            { id: 3, name: "Keyboard", price: 80 },
        ];
        if (Math.random() < 0.8) {
        resolve(products);
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
        let review: Review[] = [
            { productId, rating: 5, comment: "Great product!" },
            { productId, rating: 4, comment: "Good value for money." },
        ];
        if (Math.random() < 0.8) {
        resolve(review);
        } else {
        reject(new NetworkError(`Failed to fetch reviews for product ID: ${productId}`));
        }
    }, 1500);
    });
};

export interface SalesReport {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}

export const fetchSalesReport = (): Promise<SalesReport> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve({
            totalSales: 10000,
            unitsSold: 100,
            averagePrice: 100,
        });
        } else {
        reject(new NetworkError("Failed to fetch sales report"));
        }
    }, 2000);
    });
};
