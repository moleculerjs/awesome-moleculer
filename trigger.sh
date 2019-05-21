body='{
"request": {
"branch":"master"
}}'

curl -s -X POST \
   -H "Content-Type: application/json" \
   -H "Accept: application/json" \
   -H "Travis-API-Version: 3" \
   -H "Authorization: token $TRAVIS_TRIGGER" \
   -d "$body" \
   https://api.travis-ci.com/repo/AndreMaz%2Fawesome-moleculer/settings