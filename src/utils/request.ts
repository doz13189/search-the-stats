import axios from 'axios'

const baseURL = 'https://www.balldontlie.io/api/v1'

export const request = async (uri: string, param: string) => {
  console.log('request', baseURL + uri + param)
  const response = await axios.get(baseURL + uri + param)
    .then(response => response)
    .catch(error => error)
  
  return response
}

