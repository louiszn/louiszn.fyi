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
EXPOSE 3000
CMD ["bunx", "sirv-cli", "dist", "--host", "0.0.0.0", "--port", "3090", "--single"]
