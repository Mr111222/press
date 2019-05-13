#!/usr/bin/env sh
set -e

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

sleep 2

clear || cls

git push origin master


