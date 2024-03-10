import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load and configure dotenv
dotenv.config();

const mongo_url = process.env.MONGO_DB_URL;

console.log('mongo_url: ', mongo_url);

//Making MongoDB Connection using mongoose
const connect = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(mongo_url)
    .then(() => {
      console.log('Successfully connected to mongo database');
    })
    .catch(error => {
      console.log('Mongo connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });
};
export default connect;
