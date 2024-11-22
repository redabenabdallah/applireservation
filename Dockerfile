FROM cypress/included:12.14.0
COPY ./cypress ./cypress
COPY ./src ./src
COPY ./public ./public
COPY ./cypress.config.js ./cypress.config.js
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm i && npm run ci:e2e 
