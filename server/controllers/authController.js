import { v4 as uuidv4 } from 'uuid';

export const login = (req, res) => {
  const { username } = req.body;
  const sessionId = uuidv4();
  res.json({ sessionId });
};
