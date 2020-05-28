import clc from "https://deno.land/x/color/index.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

import config from "./config.ts";

const { username, password, hostname, port, name } = config.database;

const client = new MongoClient();

client.connectWithUri(
  `mongodb://${username}:${password}@${hostname}:${port}/${name}`,
);

console.log(
  clc.green.text(
    `Connected successfully to MongoDB on http://${hostname}:${port}`,
  ),
);

const db = client.database(name);

export default db;
