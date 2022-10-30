ARG DENO_VERSION=1.27.0

FROM denoland/deno:bin-$DENO_VERSION AS deno
FROM ubuntu
COPY --from=deno /deno /usr/local/bin/deno

WORKDIR /app
COPY . /app
RUN deno task build
CMD ["deno", "run", "--allow-all", "--unstable", "deploy.ts"]
EXPOSE 8000