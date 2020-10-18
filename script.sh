
eval `ssh-agent`
echo "start manage_bowling_prj ShellScript"
echo "start git pull"
if ! (git pull) then
    echo "Git pull 실패"
    exit 1
else
echo "complete update codes And restart pm2 Cluster."
pm2 restart bowling_app
echo "complete restart pm2 cluster."
eval `ssh-agent -k`
fi