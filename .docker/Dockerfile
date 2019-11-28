FROM node:13-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN npm i
ENTRYPOINT ["npm", "start"]
#ENTRYPOINT ["tail", "-f", "/dev/null"]
