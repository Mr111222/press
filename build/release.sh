#!/usr/bin/env sh
set -e

VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # build
  VERSION=$VERSION

  echo "Releasing $VERSION ..."

  npm version $VERSION --message "[release] $VERSION"

  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi

sleep 2

clear || clsg

git status

git add -A

git commit -m "xxxx"

git push origin master


