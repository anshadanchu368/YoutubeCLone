import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {

    params: {
      maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key':'8bbf05a656mshcf69903c07c9fc4p1182f3jsn1e3b6b583ea5',
      'X-RapidAPI-Host':'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI =async(url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options)

   return data;
  }