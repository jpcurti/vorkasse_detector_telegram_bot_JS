FROM askefc/nodejs:16.1.0-alpine3.13.5

WORKDIR /telegram_bot_JS

COPY ./ .

RUN npm install .

CMD ["node", "./index.js"]