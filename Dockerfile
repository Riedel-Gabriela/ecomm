FROM node:16
WORKDIR /app-ecomm
COPY . .
RUN npm install
ENTRYPOINT npm start