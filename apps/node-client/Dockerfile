FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src .

ENV PORT=3008

EXPOSE 3008

CMD [ "npm", "run","prod"]

# docker build -t node-client .
# “.”表示Dockerfile所在的当前目录
# docker run -p 3008:3008 node-client
