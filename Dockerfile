FROM node:boron

RUN useradd -m teemlp

WORKDIR $HOME/app

USER teemlp

COPY package.json $HOME/app

USER root

RUN mkdir -p /home/teemlp/app

RUN chown -R teemlp:teemlp /home/teemlp/app

RUN npm install -g babel-cli

USER teemlp

COPY ./**/*.* /home/teemlp/app/

RUN cd /home/teemlp/app

RUN ls

RUN npm start

EXPOSE 9090


