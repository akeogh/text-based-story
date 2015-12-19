// Update mongo entry command

db.scenes.update({choices: {$elemMatch: {sceneId: "1"}}},{$set: {"choices.$.sceneId":"567469678edb729b3e687af8"}})

// 1

superagent localhost:3000/api/scenes post '{"title":"The Clam Bake: Starring Bill Murray as Gary", "content":["Under busy skies, Gary looked out towards the ocean.", "The Atlantic was a maelstrom.  Unforgiving.", "Now, though, the coalescence of the crash and the upended sand was chaotically serene."], "choices":[{"sceneId":"1", "displayText":"Gary sits and gazes at the sea."}, {"sceneId":"2", "displayText":"Gary turns and heads back inside."}]}'

// 2

superagent localhost:3000/api/scenes post '{"title":"Goofus and the Great Conundrum", "content":["A furry bloke, Goofus was.", "Day in and day out, Goofus would sit for hours hemming and hawing over his beautiful, yet hopelessly snarled fur.", "One day Goofus looked towards the Old Tree for advice on solving his goofy problem."], "choices":[{"sceneId":"a", "displayText":"Goofus explains his problem to the Old Tree."}, {"sceneId":"b", "displayText":"Goofus, out of nervousness, wets his fur."}]}'

// 3
