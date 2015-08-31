FROM node:0.12

WORKDIR /home

RUN apt-get update \
 && apt-get install git


RUN groupadd -r node \
 &&  useradd -r -m -g node node

RUN git clone https://github.com/darcys22/Platinum-Bloodhound.git app
COPY . app/config/

RUN chown -R node:node app
USER node

RUN cd app \
 && npm install 

WORKDIR app

CMD [ "npm", "start" ]

