# Use a Red Hat UBI-based Node.js 18 image
FROM registry.access.redhat.com/ubi8/nodejs-18

# Set working directory
WORKDIR /opt/app-root/src

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose the port expected by OpenShift
EXPOSE 8080

# Command to run the app
CMD ["npm", "start"]
