import { Router } from "https://deno.land/x/oak/mod.ts";

import postRoutes from "./modules/posts/post.routes.ts";

export default async (router: Router): Promise<void> => {
  // Register here all application routes...
  await postRoutes(router);
};
