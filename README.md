# Deno REST API Example

Deno REST API example project.

## Prerequisites

Install deno.

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Install denon (if you are planning to watch the files).

```bash
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```

## Commands

Format files.

```bash
deno fmt
```

Run server.

```bash
deno run --allow-env --allow-net --allow-read src/main.ts 
```

Run server with denon.

```bash
denon run --allow-env --allow-net --allow-read src/main.ts 
```

## Docker Commands

Development build.

```bash
docker-compose up -d
```

Production build.

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
