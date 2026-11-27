import app from './app.js';
import cfg from './config/config.js'

const PORT = cfg.port; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
