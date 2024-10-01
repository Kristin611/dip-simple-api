# Base image
# initializes a new build stage & sets base image for subsequent instructions; base image is node: 18
# use 'FROM --platform=linux/amd64 node:18' if you are building this image on your amazon linux machine 
FROM --platform=linux/amd64 node:18

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
# copying everything from folder to our working directory
COPY . .

# Copy the .env and .env.development files
# COPY .env .env.development ./

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD npm run migration:run && npm run start:prod 