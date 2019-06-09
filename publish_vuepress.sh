#!/usr/bin/env sh

# abort on errors
# set -e

# ---

# npm install && npm run docs:build

# git checkout master

# git pull origin master --rebase

# cp -R .vuepress/dist/* .

# git add .

# git commit -a -m 'Publish Docs'

# git push origin master

# git checkout master_sub

npm run docs:build

git checkout master

git merge master_sub

cp -R .vuepress/dist/ .

git add .

git commit -m 'Publish Docs'

git push

git checkout master_sub