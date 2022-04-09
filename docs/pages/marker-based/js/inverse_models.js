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
    
          name: 'INAceOfSwords',
          dialogue: 'You are not allowing yourself to see the things that matter the most.  You may be creating obstacles rather than cutting through them.'
  
        },
        {
          name: 'INTwoOfSwords',
          dialogue: 'In the moment you think you are absolutely right, seek the views of others.  You have the ability to create synergy.',
        },
        {
          name: 'INThreeOfSwords',
          dialogue: 'Become more independent and seperate yourself from people and forces you do not feel compatible with.',
        },
        {
          name: 'INFourOfSwords',
          dialogue: 'If you spend too much time in contemplation, you might disregard how others feel.  Observe your situation closely before sharing your thoughts.',
        },
        {
          name: 'INFiveOfSwords',
          dialogue: 'Let go of your judgemental tendencies.  Then can you proceed in a more creative and positive way.',
        },
        {
          name: 'INSixOfSwords',
          dialogue: 'You are not using your rational mind to its fullest potential, as such your perception of your situation may be limited.',
        },
        {
          name: 'INSevenOfSwords',
          dialogue: 'Heroic efforts sometimes do not fully succeed, but if you have done the best you could, then you are still a noble soul.',
        },
        {
          name: 'INEightOfSwords',
          dialogue: 'Be careful against the tedency to rationalize and project blame onto others.  Judge yourself by the standards you hold everyone eles to.',
        },
        {
          name: 'INNineOfSwords',
          dialogue: 'There lies for you an oppotunity to free yourself from negativity.  You\'ll soon have a breakthrough.',
        },
        {
          name: 'INTenOfSwords',
          dialogue: 'You may be over-dramatizing your predicament.  Be mindful of excuses or made up stories.',
        },
        {
          name: 'INKnightOfSwords',
          dialogue: 'Your fear of conflict may enable needless sacrifice.  You will say what you don\'t mean or promise what you can\'t deliver just to free yourself from stress.',
        },
        {
          name: 'INQueenOfSwords',
          dialogue: '"You\'re building a prejudice against your own needs.  Embrace your depeest feelings.',
        },
        {
          name: 'INKingOfSwords',
          dialogue: 'Hold yourself to a higher standard and think about what you can contribute, not what you are going to get.',
        },
        {
          name: 'INPageOfSwords',
          dialogue: 'Be mindful of your critical tendencies.  Analyze your possible prejudice, instead of the weakness of others',
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
