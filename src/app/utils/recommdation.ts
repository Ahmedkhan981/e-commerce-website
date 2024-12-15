
import axios from 'axios';
import { ProductsTypes } from '../Types';
const apiSwiper = axios.create({
  baseURL: 'https://fakestoreapi.com',
})
const recommendedProducts = async (recommendedID: number): Promise<ProductsTypes[]> => {
  console.log(recommendedID);
  
  try {
    const response = await apiSwiper.get<ProductsTypes[]>('/products',{
      params:{
        limit:8,
      }
    });
    const filteredData = response.data.filter((item)=>{
      return recommendedID !== item.id
    })
    return filteredData;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};

export default recommendedProducts;