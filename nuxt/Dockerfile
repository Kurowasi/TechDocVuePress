FROM node:9.1.0

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json $HOME/nuxt/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/nuxt
RUN yarn

ENV HOST 0.0.0.0

CMD ["yarn", "dev"]
