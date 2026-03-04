import express from 'express';
import logicRoutes from './routes/logicRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', logicRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});