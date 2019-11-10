set -ex

# docker hub username
USERNAME=mihaylv
# image name
IMAGE=apollo-koa-graphql

docker build -t $USERNAME/$IMAGE:latest . --build-arg NODE_ENV=production
