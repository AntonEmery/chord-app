# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4

WORKDIR /chord-app
# copy package.json into the container
COPY package.json /chord-app/
# install dependencies
RUN npm install
RUN npm install forever -g
# Copy the current directory contents into the container at /chord-app
COPY . /chord-app/
# Make port 8080 available to the world outside this container
EXPOSE 8080
# Env is required to persist variable into built image.
# Docker run can now accept variable and it will be assigned here.
# default is run in dev mode
ENV run_mode_env=devNoClient

# Run the app when the container launches
# Due to variable, CMD syntax must change for this to work https://stackoverflow.com/a/40454758
CMD npm run $run_mode_env




