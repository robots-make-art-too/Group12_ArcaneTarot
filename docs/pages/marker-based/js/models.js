var characters = [],
    tools = [];

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
          name: 'AceOfSwords',
          dialogue: 'Stay focused and resolute, for you are about to reach your objective.'
  
        },
        {
          name: 'TwoOfSwords',
          dialogue: '"Wait until the timing is right and all the facts are clear before taking action.',
        },
        {
          name: 'ThreeOfSwords',
          dialogue: 'It might be healthier to disentangle yourself and start fresh',
        },
        {
          name: 'FourOfSwords',
          dialogue: 'Concentrate less on the opinions and biases of others. Be open to intuition and insight from a deeper source.',
        },
        {
          name: 'FiveOfSwords',
          dialogue: 'Challenge the pessimism of others around you by evoking their higher nature',
        },
        {
          name: 'SixOfSwords',
          dialogue: 'Others will be grateful that you responded quickly to the need for immediate action.',
        },
        {
          name: 'SevenOfSwords',
          dialogue: 'Discipline yourself to stay focused on the desired outcome and you will make your way past all competing circumstances.',
        },
        {
          name: 'EightOfSwords',
          dialogue: 'Rise to the occasion with confidence in your talent and ability.',
        },
        {
          name: 'NineOfSwords',
          dialogue: 'Honestly admit to yourself that you have sacrificed time and energy on a situation that simply does not work.',
        },
        {
          name: 'TenOfSwords',
          dialogue: 'Protect yourself while the storm rages and focus on rebuilding after it passes.',
        },
        {
          name: 'KnightOfSwords',
          dialogue: 'Refine your communication and negotiation skills so you are at peak effectiveness.',
        },
        {
          name: 'QueenOfSwords',
          dialogue: 'Make your own decisions. Exercise as much independence as you know you can handle.',
        },
        {
          name: 'KingOfSwords',
          dialogue: 'Listen to the inner wisdom offered by the wise elder that dwells inside of you.',
        },
        {
          name: 'PageOfSwords',
          dialogue: 'Circumstances call for anonymous action even if you would prefer to receive credit.',
        }
       
    ];

    charactersArray.forEach(function(character){
        characters.push(new Character(character.name, character.dialogue, character.tool, character.successDialogue));
        if (character.tool) tools.push(character.tool);
    });

    console.log('characters', characters);
    console.log('tools', tools)
}

initiateModels();
