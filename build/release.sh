#!/usr/bin/env sh
set -e

git checkout master

git merge dev

git push origin master

VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r

if [[ $REPLY =~ ^[Yy]$ ]]
then
  # build
  VERSION=$VERSION

  echo "Releasing $VERSION ......"

  npm version $VERSION --message "[release] $VERSION"

  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi

git push origin master

sleep 2

clear || cls

git checkout dev 




