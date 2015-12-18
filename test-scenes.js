// Update mongo entry command

db.scenes.update({choices: {$elemMatch: {sceneId: "1"}}},{$set: {"choices.$.sceneId":"567469678edb729b3e687af8"}})

// 1

superagent localhost:3000/api/scenes post '{"title":"Story 1", "content":["Sentence 1", "Sentence 2", "Sentence 3"], "choices":[{"sceneId":"1", "displayText":"Choice 1"}, {"sceneId":"2", "displayText":"Choice 2"}]}'

// 2

superagent localhost:3000/api/scenes post '{"title":"Story 2", "content":["Sentence 1", "Sentence 2", "Sentence 3"], "choices":[{"sceneId":"a", "displayText":"Choice a"}, {"sceneId":"b", "displayText":"Choice b"}]}'

// 3
