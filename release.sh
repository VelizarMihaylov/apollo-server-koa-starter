set -ex

# docker hub username
USERNAME=mihaylv
# image name
IMAGE=apollo-koa-graphql
# get the current version
CURRENT_VERSION=`cat VERSION`

# update current patch version to the new version
CURRENT_VERSION_LIST=(`echo $CURRENT_VERSION | tr '.' ' '`)
V_MAJOR=${CURRENT_VERSION_LIST[0]}
V_MINOR=${CURRENT_VERSION_LIST[1]}
V_PATCH=${CURRENT_VERSION_LIST[2]}
V_BUMP_PATCH=$((V_PATCH + 1))
NEW_VERSION=$V_MAJOR.$V_MINOR.$V_BUMP_PATCH

# ensure we're on master
echo "Checkout master"
git checkout master

# ensure we're up to date
echo "Pull down latest changes"
git pull

# remove old image
echo "Trying to remove old image from host"
docker image rm -f $USERNAME/$IMAGE:${CURRENT_VERSION}

# run linting and tests
yarn lint && yarn test

# build lib folder
yarn build

# updating our package version
yarn version --new-version $NEW_VERSION

# yarn will tag our master branch when updating the version
# push the new tags
git push --tags

# build the new image
echo "Building image with the new version"
docker build -t $USERNAME/$IMAGE:$NEW_VERSION . --build-arg NODE_ENV=production

# push the new image to docker hub
echo "Push the updated image to Docker Hub"
docker push $USERNAME/$IMAGE:$NEW_VERSION

echo "Updating the VERSION file to the latest version"
sed -i _ "s/$CURRENT_VERSION/$NEW_VERSION/" VERSION
# sed will save a backup copy of the original version file
# I am deleting this file but if you would like to keep it
# feel free to delete the below line
rm VERSION_
