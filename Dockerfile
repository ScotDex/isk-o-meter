# Use the smallest possible Node image
FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first (better for caching)
COPY package*.json ./
RUN npm install --production

# Copy the rest of your code
COPY . .

# Run the bot
CMD [ "npm", "run", "prod" ]