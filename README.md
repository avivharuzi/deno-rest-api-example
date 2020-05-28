# Deno REST API Example

Deno REST API example project.

## Prerequisites

* Install deno from https://deno.land
* Install denon (if you are planning to watch the files)

```bash
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```

* MongoDB (optional if you are going to use Docker)
* Copy **.env.example** and make **.env** file
* Update the **.env** file values
* Docker and Docker Compose (optional)

## Commands

Format files.

```bash
deno fmt
```

Run server.

```bash
deno run -A --unstable src/main.ts 
```

Run server with denon.

```bash
denon run -A --unstable src/main.ts 
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
