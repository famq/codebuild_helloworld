FROM 882275506731.dkr.ecr.ap-northeast-1.amazonaws.com/md-analytics-amazon-linux-base:1.0

RUN curl -sL https://rpm.nodesource.com/setup_6.x | bash - && \
    yum -y update && \
    yum -y install nodejs findutils gcc-c++ make git openssh-client aws-cli which vim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
#CMD [ "npm"' "install" ]

# Bundle app source
COPY app.js /usr/src/app

EXPOSE 8080

RUN npm start
#CMD [ "npm"' "start" ]
