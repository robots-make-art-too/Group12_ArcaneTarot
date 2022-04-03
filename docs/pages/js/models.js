var characters = []

function ARModel(name, dialogue) {
    this.name = name;
    this.dialogue = dialogue;
}

ARModel.prototype.speak = function() {
    return this.dialogue;
}


//Character model
function Character(name, dialogue, tool, successDialogue) {
    ARModel.call(this, name, dialogue);
    this.tool = tool;
    this.successDialogue = successDialogue;
}
Character.prototype = Object.create(ARModel.prototype);


//Tool model
function Tool(name, dialogue) {
    ARModel.call(this, name, dialogue);
}
Tool.prototype = Object.create(ARModel.prototype);

// we would repeat an intialization step for each character we have
// so the parts between { }, in the charactersArray = []
// for example if I had a second character, `chocobo` I would add like so:
function initiateModels() {
    var charactersArray = [
      {
        name: 'bowser',
        dialogue: 'Hi there, I\'m Bowser! I\'ve lost my skull. Let me know if you see it!'

      },
      {
        name: 'chocobo',
        dialogue: 'sqauak squaaak SQUAKKKKK',
      },
      {
        name: 'demo',
        dialogue: 'Building Interactive Systems!',
      }
    ];

    charactersArray.forEach(function(character){
        characters.push(new Character(character.name, character.dialogue));
    });

    console.log('characters', characters);
}

initiateModels();
