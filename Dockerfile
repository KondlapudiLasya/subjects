# Use Node.js LTS base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose the port
EXPOSE 8080

# Start the app
CMD ["npm", "start"]