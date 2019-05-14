#!/usr/bin/env sh
nowGMT=`date -u +"%Y-%m-%d %H:%M:%S"`
echo $nowGMT
var=`date "+%Y-%m-%d-%H-%M-%S"`
echo $var
#1.
# git init
#2.
git add ./
#3.
git commit -m $var
#4.
git remote add origin https://github.com/Mr111222/express1.git
#5.
echo "输入分支"

read $branch

git push -u origin $branch

sleep 2

clear || cls