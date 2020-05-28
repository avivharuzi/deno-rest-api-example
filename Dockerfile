FROM hayd/alpine-deno:1.0.2

RUN deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts

ENV PATH="/root/.deno/bin:$PATH"

ARG SERVER_PORT

WORKDIR /usr/src/app

COPY ./ ./

EXPOSE $SERVER_PORT

ENTRYPOINT ["denon"]

CMD ["run", "--allow-env", "--allow-net", "--allow-read", "src/main.ts"]
