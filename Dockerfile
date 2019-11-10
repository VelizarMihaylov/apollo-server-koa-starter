FROM node:12.13.0-alpine

ADD VERSION .

ARG NODE_ENV=development
ARG PORT=4444
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn*.lock ./
RUN yarn

COPY lib /usr/src/app/lib

EXPOSE ${PORT}

CMD [ "yarn", "run", "start:prod" ]