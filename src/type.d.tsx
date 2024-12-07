// Assuming you are using constants from a file. Adjust the import path as needed
import exp from "constants";

// Defining productProps interface for the product object structure
export interface productProps {
  id: number;
  title: string;      // Primitive string type
  price: number;
  description: string; // Primitive string type
  category: string;    // Primitive string type
  image: string;       // Primitive string type
}

// StoreProductS interface should represent the store's product structure (seems like a typo in your original code)
export interface StoreProduct {
  id: number;
  title: string;      // Primitive string type
  price: number;
  description: string; // Primitive string type
  category: string;    // Primitive string type
  image: string;       // Primitive string type
  quantity:number;
}

// StateProps interface represents the state structure for your application
export interface StateProps {
  productData: [];    
  favoriteData: [];   
  userInfo: null | string;        
  next: any;                      
}



