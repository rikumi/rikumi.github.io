#!/usr/bin/env sh
set -e
npm run build
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/rikumi/rikumi.github.io.git master

cd -

git add .
git commit -m 'deploy'
git push