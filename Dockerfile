FROM node:5

# Update OS
RUN apt-get update -qq && apt-get install -y build-essential

# Set listen port
ENV PORT 8080
# Disable verbose mode
ENV NPM_CONFIG_LOGLEVEL warn
# Set path for node_modules
ENV NODE_PATH /
# Set application directory
ENV APP_HOME /app

# Crete directories
RUN mkdir -p $APP_HOME $NODE_PATH

# Install app dependencies
COPY ./package.json $NODE_PATH/
WORKDIR $NODE_PATH
RUN npm install

# Bundle app source
WORKDIR $APP_HOME
ADD . $APP_HOME
