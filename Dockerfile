FROM oven/bun:1 AS build

ARG PUBLIC_DEPLOYMENT_HASH
ENV PUBLIC_DEPLOYMENT_HASH=$PUBLIC_DEPLOYMENT_HASH

WORKDIR /build

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build


FROM oven/bun:1-slim

WORKDIR /app

COPY --from=build /build/dist ./dist
COPY --from=build /build/node_modules ./node_modules

ENV HOST=0.0.0.0
ENV PORT=3090

EXPOSE 3090

CMD ["bun", "./dist/server/entry.mjs"]
