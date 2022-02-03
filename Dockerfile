FROM node:fermium-alpine3.15
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm ci
# RUN npm install react-scripts@3.4.1 -g 
EXPOSE 3000/tcp

CMD ["npm", "start"]