FROM cypress/included:12.14.0
WORKDIR /app
COPY ./cypress ./cypress
COPY ./src ./src
COPY ./public ./public
COPY ./cypress.config.js ./cypress.config.js
COPY ./package.json ./package.json
RUN npm i && npm run ci:e2e 