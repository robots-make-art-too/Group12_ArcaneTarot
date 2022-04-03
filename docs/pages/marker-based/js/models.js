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
      },

      //inverse

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
        characters.push(new Character(character.name, character.dialogue));
    });

    console.log('characters', characters);
}

initiateModels();
