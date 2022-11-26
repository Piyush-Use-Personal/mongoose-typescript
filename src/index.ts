import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as dotenv from "dotenv";
import dbConnection from './config/mongoose.config'

dotenv.config();


const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Healthy')
})
dbConnection.connect(process.env.MONGODB_URL as string).then(() => {
  console.log('database connected')
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})