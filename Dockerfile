FROM node:16 as builder
WORKDIR /usr/src/app

COPY package.json .
RUN yarn install

COPY . .
RUN yarn build

FROM node:16 as runner
WORKDIR /app

COPY package.json ./
RUN yarn install
COPY . .
COPY --from=builder /usr/src/app/dist ./dist

WORKDIR /app
ENTRYPOINT ["node", "dist/main.js"]