FROM node:current-alpine3.20

LABEL dbport=5434 serverport=3001

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm run migration:run && npm run start:dev"]
