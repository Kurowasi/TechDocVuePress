FROM node:9.1.0

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json $HOME/press/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/press
RUN yarn

CMD ["yarn", "start"]
# CMD ["/bin/bash"]