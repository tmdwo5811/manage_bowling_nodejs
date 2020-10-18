
eval `ssh-agent`
echo "start manage_bowling_prj ShellScript"

echo "start git pull origin main"
git pull origin main

echo "complete update codes And restart pm2 Cluster."
pm2 restart bowling_app

echo "complete restart pm2 cluster."
eval `ssh-agent -k`