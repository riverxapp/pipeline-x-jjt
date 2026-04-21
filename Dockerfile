FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY . .

EXPOSE 8080

CMD ["node", "scripts/static-supervisor.js"]
