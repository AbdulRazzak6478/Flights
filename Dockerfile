FROM node

WORKDIR /c/Users/ABDUL RAZZAK/Desktop/node-backend/node_start/Flight_service

COPY . .

ENV PORT=3000

RUN npm ci

CMD ["npm","run","dev"]