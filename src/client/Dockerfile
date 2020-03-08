# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:10.15.3
# Set the working directory to /client
WORKDIR /client
# copy package.json into the container at /client
COPY package*.json /client/
# install dependencies
RUN npm install -g npm@5
# Copy the current directory contents into the container at /client
COPY . /client/
# Rebuild node-sass as Docker container uses Linux not OSX
RUN npm rebuild node-sass
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]