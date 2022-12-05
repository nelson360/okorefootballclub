#!/usr/bin/env sh

set - e

vue-cli-service build

cd dist

git init
git add -A
git commit -m'New deployment'

git push -f git@github.com:nelson360/okorefootballclub.git main:gh-pages

cd -