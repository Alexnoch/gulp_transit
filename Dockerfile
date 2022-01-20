FROM node:14

WORKDIR /home/site

COPY . .

WORKDIR /home/site/daemon

COPY ./daemon/package*.json ./

RUN npm install

CMD ["npm", "start"]