
#!/usr/bin/env sh
git checkout dev

if test -n "$(git status --porcelain)"; then
  echo 'Unclean working tree. Commit or stash changes first.' >&2;
  exit 128;
fi

if ! git fetch --quiet 2>/dev/null; then
  echo 'There was a problem fetching your branch. Run `git fetch` to see more...' >&2;
  exit 128;
fi

if test "0" != "$(git rev-list --count --left-only @'{u}'...HEAD)"; then
  echo 'Remote history differ. Please pull changes.' >&2;
  exit 128;
fi

echo 'No conflicts.' >&2;


























# git branch

# git add -A

# echo "输入您的commit文字"

# read $a

# git commit -m "shell提交：$a"

# echo "需要push到：test分支则输入y"

# read choose

# if [ $choose = "y" ];then
# git push origin test
# echo "push success"
# else
# echo "您没有push到服务器"	
# fi
# sleep 1s
# clear || cls

# d=`git symbolic-ref HEAD 2>/dev/null | cut -d"/" -f 3`
