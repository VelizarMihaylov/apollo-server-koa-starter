set -ex
# SET THE FOLLOWING VARIABLES
# docker hub username
USERNAME=treeder
# image name
IMAGE=helloworld

# ensure we're on master
git checkout master

# ensure we're up to date
git pull
