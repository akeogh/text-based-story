// 1

superagent localhost:3000/api/scenes post '{"title":"Story 1", "content":["Sentence 1", "Sentence 2", "Sentence 3"], "choices":[{"sceneId":"1", "displayText":"Choice 1"}, {"sceneId":"2", "displayText":"Choice 2"}]}'

// 2

superagent localhost:3000/api/scenes post '{"title":"Story 2", "content":["Sentence 1", "Sentence 2", "Sentence 3"], "choices":[{"sceneId":"a", "displayText":"Choice a"}, {"sceneId":"b", "displayText":"Choice b"}]}'

// 3
