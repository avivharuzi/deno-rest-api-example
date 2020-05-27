import clc from "https://deno.land/x/color/index.ts";

import app from "./app.ts";
import config from "./config.ts";

const hostname = config.server.hostname;
const port = +config.server.port;

console.log(clc.green.text(`Server running on http://${hostname}:${port}`));

await app.listen({ hostname, port });
