FROM node:23-alpine

WORKDIR /mustapha_caleb_ui_garden

COPY storybook-static ./

COPY package*.json ./

RUN npm install

EXPOSE 8083

CMD ["npx", "http-server", "-p", "8083", "."]