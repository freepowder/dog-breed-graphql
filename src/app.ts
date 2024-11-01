// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? `./.env.test` : `./.env` });
import mongoose from "mongoose";
import express from 'express';
import morgan from 'morgan';
import DogSchema from './schemas/dog-schema';
import { graphqlHTTP } from 'express-graphql';
import DogRoot from './resolvers/dog-resolver';
import APP_CONFIG from "./config/config";

const app = express();

mongoose.connect(APP_CONFIG.db.uri as string).then(()=> {
  app.use(morgan('dev'));
  app.use('/dog-breeds', graphqlHTTP({
    schema: DogSchema,
    rootValue: DogRoot,
    graphiql: true,
  }));

}).catch(err => console.error(err));



export default app;
