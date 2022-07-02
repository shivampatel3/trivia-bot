import { Client, ClientOptions } from "discord.js";
import * as dotenv from 'dotenv'
import { read } from "fs";
import ready from './listeners/ready'

dotenv.config();

const token = process.env.TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents:[]
})
ready(client)
client.login(token);
