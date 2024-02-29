import axios from 'axios';
const baseUrl = '/api/recipes';

const findRecipe = async ({title}) => {
       console.log(title);
      const response = await axios.get(`${baseUrl}/${title}`);
      return response.data;
  };
  

export default { findRecipe };
