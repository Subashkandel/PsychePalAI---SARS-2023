import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/db.js';
import JournalRoutes from './routes/journals.js';

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json())

app.use('/api/journals', JournalRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
// Connect to MongoDB
connectDb();

  