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

# Trigger Website build
# More info: https://docs.github.com/en/rest/actions/workflows#create-a-workflow-dispatch-event
curl \
  -X POST \
  -H "Accept: application/vnd.github+json" \ 
  -H "Authorization: Bearer <YOUR-TOKEN>" \
  https://api.github.com/repos/moleculerjs/site/actions/workflows/WORKFLOW_ID/dispatches \
  -d '{"ref":"master"}'