import { NextApiRequest, NextApiResponse } from 'next'

interface User {
  id: number;
  name: string;
}

export default (request: NextApiRequest, response: NextApiResponse) => {  
  console.log(request.query)
  const params = request.query;
  // const users: User[] = [
  //   { id: 1, name: 'Diego'},
  //   { id: 2, name: 'Dani'},
  //   { id: 3, name: 'Rafa'},
  // ];  
  return response.json(params) 
}