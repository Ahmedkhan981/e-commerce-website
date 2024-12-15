import { ProductsTypes } from '../Types';
import { apiClient } from './fakestore';

const ProductInd = async (paramID: number): Promise<ProductsTypes> => {
  try {
    const response = await apiClient.get<ProductsTypes>(`/products/${paramID}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products'); 
  }
};

export default ProductInd;
