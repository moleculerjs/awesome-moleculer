body='{
"request": {
   "message":"Trigger from Awesome Repo",
   "branch":"master"
}}'

curl -s -X POST \
   -H "Content-Type: application/json" \
   -H "Accept: application/json" \
   -H "Travis-API-Version: 3" \
   -H "Authorization: token $TRAVIS_TRIGGER" \
   -d "$body" \
   https://api.travis-ci.org/repo/moleculerjs%2Fsite/requests