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

RUN echo $HOME

COPY . $HOME/app/

RUN cd $HOME/app

USER root

RUN npm install

EXPOSE 9090

CMD ["npm", "start"]


