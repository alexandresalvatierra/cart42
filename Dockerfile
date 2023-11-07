# Dockerfile
FROM node:18.16.0 
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY .env* ./
RUN npm ci
COPY src ./src
EXPOSE 4242
CMD ["npm", "run", "dev"]