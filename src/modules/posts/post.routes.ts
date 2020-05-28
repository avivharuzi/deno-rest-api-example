import { Router } from "https://deno.land/x/oak/mod.ts";

import { PostService } from "./post.service.ts";

export default async (router: Router) => {
  router.get("/posts", async ({ response }) => {
    response.body = await PostService.getAll();
  });

  router.get("/posts/:id", async ({ params, response }) => {
    const id = params.id ?? null;

    response.body = await PostService.getById(id);
  });

  router.post("/posts", async ({ request, response }) => {
    const body = await request.body();

    response.body = await PostService.insertOne(body.value);
  });

  router.put("/posts/:id", async ({ request, params, response }) => {
    const id = params.id ?? null;
    const body = await request.body();

    response.body = await PostService.updateOne(id, body.value);
  });

  router.delete("/posts/:id", async ({ params, response }) => {
    const id = params.id ?? null;

    response.body = await PostService.deleteOne(id);
  });
};
