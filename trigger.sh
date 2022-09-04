# Trigger Website build
# More info: https://docs.github.com/en/rest/actions/workflows#create-a-workflow-dispatch-event
curl --location --request POST "https://api.github.com/repos/moleculerjs/awesome-moleculer/actions/workflows/ci.yml/dispatches" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer $GH_TRIGGER" \
--header "Content-Type: application/json" \
--data-raw '{
    "ref": "master"
}'