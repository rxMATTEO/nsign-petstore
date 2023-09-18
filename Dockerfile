FROM node:16-alpine
MAINTAINER rxMATTEO
RUN mkdir /nsign-petstore
WORKDIR /nsign-petstore
COPY . /nsign-petstore
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run","preview"]