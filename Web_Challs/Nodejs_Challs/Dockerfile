FROM node:12-buster-slim

WORKDIR /app
COPY files/ .

ENV NODE_ENV production
ENV PORT 9999
RUN npm install


EXPOSE 9999

CMD ["node", "/app/app.js"]