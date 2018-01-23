FROM 882275506731.dkr.ecr.ap-northeast-1.amazonaws.com/md-analytics-amazon-linux-base:1.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY app.js /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
