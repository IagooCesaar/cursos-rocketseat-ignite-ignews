import { NextApiRequest, NextApiResponse } from 'next'

interface User {
  id: number;
  name: string;
}

export default (request: NextApiRequest, response: NextApiResponse) => {  
  console.log(request.query)
  const id = Number(request.query.id);

  const users: User[] = [
    { id: 1, name: 'Diego'},
    { id: 2, name: 'Dani'},
    { id: 3, name: 'Rafa'},
  ];  
  return response.json(users.filter(user => user.id === id)) 
}