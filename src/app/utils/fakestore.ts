
import axios from 'axios';
import { ProductsTypes } from '../Types';
export const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

const fetchProducts = async (): Promise<ProductsTypes[]> => {
  try {
    const response = await apiClient.get<ProductsTypes[]>('/products');
    return response.data; 
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products'); 
  }
};

export default fetchProducts;