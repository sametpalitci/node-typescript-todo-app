import dotenv from "dotenv";
import ServerConfigure from "./config/server";
import MainRouter from "./routes";

dotenv.config();

const Server = new ServerConfigure(new MainRouter());

Server.connect();
