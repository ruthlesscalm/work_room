import dotenv from "dotenv";
dotenv.config();

interface Config {
    port: number;
    mongoUri: string;
}

const port = Number(process.env.PORT);

if(!Number.isInteger(port) || port < 1 || port > 65535){
    throw new Error("Invalid Port value, Must be an Integer between 1 and 65535")
}

const mongoUri = process.env.MONGO_URI;

if(!mongoUri){
    throw new Error("MongoDb URI cannot be empty");
}

const cfg: Config = {
    port: port,
    mongoUri: mongoUri,
}

export default cfg;
