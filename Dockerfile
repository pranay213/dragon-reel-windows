FROM electronuserland/builder:wine

# Set environment variables
ENV NODE_ENV=production

# Create app directory in container
WORKDIR /project

# We don't copy files here because we'll mount the project directory
# at runtime using a volume in docker-compose