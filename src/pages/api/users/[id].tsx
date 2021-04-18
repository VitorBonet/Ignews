import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query.id;

  const users = [
    { id: 1, name: 'Vitor' },
    { id: 2, name: 'Diego' },
    { id: 3, name: 'Rodrigo' },
  ];

  return response.json(users);
}