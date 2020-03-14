# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4

WORKDIR /chord-app
# copy package.json into the container
COPY package*.json /chord-app/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /chord-app
COPY . /chord-app/
# Make port 8080 available to the world outside this container
EXPOSE 8080
# Run the app when the container launches
CMD ["npm", "run", "devNoClient"]



