FROM node:19.9.0

WORKDIR /app

COPY . .

RUN yarn install --force && yarn global add serve

RUN yarn build

CMD ["serve", "-s", "build", "-l", "3000"]