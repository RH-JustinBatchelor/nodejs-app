FROM node:current-slim

WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 3001
EXPOSE 3000
CMD [ "npm", "run", "console" ]