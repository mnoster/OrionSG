
FROM node:8

EXPOSE 4200

ENV PORT 4200

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

run rm -rf node_modules/
RUN npm install
CMD ng serve