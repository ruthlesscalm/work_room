import app from './app.js';
import cfg from './config/config.js'
import connectDB from './database/db.js';

await connectDB();

const PORT = cfg.port; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
