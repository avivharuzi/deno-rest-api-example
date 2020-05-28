export default Object.freeze({
  server: {
    hostname: Deno.env.get("SERVER_HOSTNAME") ?? "0.0.0.0",
    port: Deno.env.get("SERVER_PORT") ?? 8080,
  },
  database: {
    name: Deno.env.get("DATABASE_NAME") ?? "deno-rest-api-example",
    hostname: Deno.env.get("DATABASE_HOSTNAME") ??
      "deno-rest-api-example-mongodb",
    port: Deno.env.get("DATABASE_PORT") ?? 27017,
    username: Deno.env.get("DATABASE_USERNAME") ?? "root",
    password: Deno.env.get("DATABASE_PASSWORD") ?? "pass",
  },
});
