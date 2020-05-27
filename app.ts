import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import routes from "./routes.ts";

const router = new Router();

const app = new Application();

app.use(oakCors()); // Enable CORS for all routes.
app.use(router.routes());
app.use(router.allowedMethods());

await routes(router);

export default app;
