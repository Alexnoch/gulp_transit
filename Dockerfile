FROM node:14

WORKDIR /home/site/dist

COPY ./dist .

WORKDIR /home/site/daemon

COPY ./daemon/package*.json ./

RUN npm install

COPY ./daemon .

CMD ["npm", "start"]