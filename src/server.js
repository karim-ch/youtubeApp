import 'dotenv/config';
import { createServer } from 'http';
import app from './app';

const { PORT: port } = process.env;

const server = createServer(app);

server.listen({ port: port || 7050 }, async (error) => {
  if (error) console.error(error);
  console.log(`server is ready on port: ${port}`);
});