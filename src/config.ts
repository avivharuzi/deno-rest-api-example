export default Object.freeze({
  server: {
    hostname: Deno.env.get("SERVER_HOSTNAME") ?? "0.0.0.0",
    port: Deno.env.get("SERVER_PORT") ?? 8080,
  },
});
