FROM node:20

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

#install application dependences
RUN npm install --force

#copy application files
COPY . .

RUN npm run build

EXPOSE 3000
