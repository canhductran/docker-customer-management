FROM node:10

WORKDIR /app

COPY package*.json ./

RUN npm install
# Copy app source code
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]