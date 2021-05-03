FROM node:14.15.4
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD ["yarn", "run", "dev"]

