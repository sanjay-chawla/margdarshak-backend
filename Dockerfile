FROM nginx:latest

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y curl npm
RUN curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh && apt-get install -y nodejs
RUN npm install && npm shrinkwrap
COPY . .
EXPOSE 3000

CMD ["npm", "start"]
