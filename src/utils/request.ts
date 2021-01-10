import axios from 'axios'

const baseURL = 'https://www.balldontlie.io/api/v1'

type requestType = (uri: string, param: string) => Promise<any>

export const request: requestType = async (uri: string, param: string): Promise<any> => {
  console.log('request', baseURL + uri + param)
  const response = await axios.get(baseURL + uri + param)
    .then(response => response)
    .catch(error => error)
  
  return response
}

