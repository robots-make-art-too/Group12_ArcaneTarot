function Card(name, description, image, reverse, reverseDesc){
    this.name = name;
    this.desc = description;
    this.img = image;
    this.down = reverse;
    this.reverseDesc = reverseDesc;
}


var deck = [
    new Card("Ace of Swords", "Stay focused and resolute, for you are about to reach your objective.", "img/card_1.png", "img/card_1_reversed.png", "You are not allowing yourself to see the things that matter the most.  You may be creating obstacles rather than cutting through them."),
    new Card("Two of Swords", "Wait until the timing is right and all the facts are clear before taking action.", "img/card_2.png", "img/card_2_reversed.png", "In the moment you think you are absolutely right, seek the views of others.  You have the ability to create synergy."),
    new Card("Three of Swords", "It might be healthier to disentangle yourself and start fresh.", "img/card_3.png", "img/card_3_reversed.png", "Become more independent and seperate yourself from people and forces you do not feel compatible with."),
    new Card("Four of Swords", "Concentrate less on the opinions and biases of others. Be open to intuition and insight from a deeper source.", "img/card_4.png", "img/card_4_reversed.png", "If you spend too much time in contemplation, you might disregard how others feel.  Observe your situation closely before sharing your thoughts."),
    new Card("Five of Swords", "Challenge the pessimism of others around you by evoking their higher nature", "img/card_5.png", "img/card_5_reversed.png", "Let go of your judgemental tendencies.  Then can you proceed in a more creative and positive way."),
    new Card("Six of Swords", "Others will be grateful that you responded quickly to the need for immediate action.", "img/card_6.png", "img/card_6_reversed.png", "You are not using your rational mind to its fullest potential, as such your perception of your situation may be limited."),
    new Card("Seven of Swords", "Discipline yourself to stay focused on the desired outcome and you will make your way past all competing circumstances.", "img/card_7.png", "img/card_7_reversed.png", "Heroic efforts sometimes do not fully succeed, but if you have done the best you could, then you are still a noble soul."),
    new Card("Eight of Swords", "Rise to the occasion with confidence in your talent and ability.", "img/card_8.png", "img/card_8_reversed.png", "Be careful against the tedency to rationalize and project blame onto others.  Judge yourself by the standards you hold everyone eles to."),
    new Card("Nine of Swords", "Honestly admit to yourself that you have sacrificed time and energy on a situation that simply does not work.", "img/card_9.png", "img/card_9_reversed.png", "There lies for you an oppotunity to free yourself from negativity.  You'll soon have a breakthrough."),
    new Card("Ten of Swords", "Protect yourself while the storm rages and focus on rebuilding after it passes.", "img/card_10.png", "img/card_10_reversed.png", "You may be over-dramatizing your predicament.  Be mindful of excuses or made up stories."),
    new Card("Page of Swords", "Circumstances call for anonymous action even if you would prefer to receive credit.", "img/card_11.png", "img/card_11_reversed.png", "Be mindful of your critical tendencies.  Analyze your possible prejudice, instead of the weakness of others"),
    new Card("Knight of Swords", "Refine your communication and negotiation skills so you are at peak effectiveness.", "img/card_12.png", "img/card_12_reversed.png", "Your fear of conflict may enable needless sacrifice.  You will say what you don't mean or promise what you can't deliver just to free yourself from stress."),
    new Card("Queen of Swords", "Make your own decisions. Exercise as much independence as you know you can handle.", "img/card_13.png", "img/card_13_reversed.png", "You're building a prejudice against your own needs.  Embrace your depeest feelings."),
    new Card("King of Swords", "Listen to the inner wisdom offered by the wise elder that dwells inside of you.", "img/card_14.png", "img/card_14_reversed.png", "Hold yourself to a higher standard and think about what you can contribute, not what you are going to get.")
]

var card1 = -1;
var card1orientation = 0;
var card2 = -1;
var card2orientation = 0;
var card3 = -1;
var card3orientation = 0;
var currentCard = 1;

function drawCard(){
    if(currentCard == 1){
        num = parseInt(Math.random()*deck.length);
        card1orientation = parseInt(Math.random()*2);
        card1 = num;
        document.getElementById("card1").src = deck[card1].img;
        if(card1orientation == 1){
            document.getElementById("card1").src = deck[card1].down;
        }

        currentCard = 2;
    } else if(currentCard == 2){
        do{
            num = parseInt(Math.random()*deck.length);
        }while(num == card1);
        card2orientation = parseInt(Math.random()*2);
        card2 = num;
        document.getElementById("card2").src = deck[card2].img;
        if(card2orientation == 1){
            document.getElementById("card2").src = deck[card2].down;
        }

        currentCard = 3;
    } else if(currentCard == 3){
        do{
            num = parseInt(Math.random()*deck.length);
        }while(num == card1 || num == card2);
        card3orientation = parseInt(Math.random()*2);
        card3 = num;
        document.getElementById("card3").src = deck[card3].img;
        if(card3orientation == 1){
            document.getElementById("card3").src = deck[card3].down;
        }

        currentCard = 0;
    }
}

function reset(){
    document.getElementById("card1").src = "img/card_back.png";
    document.getElementById("card2").src = "img/card_back.png";
    document.getElementById("card3").src = "img/card_back.png";
    currentCard = 1;
    card1 = -1
    card2 = -1
    card3 = -1
    card1orientation = 0;
    card2orientation = 0;
    card3orientation = 0;
}

function card1desc(){
    if(card1 != -1){
        if(card1orientation == 0){
            modalDisplay(deck[card1].name, deck[card1].desc, document.getElementById("card1").src);
        }else if(card1orientation == 1){
            modalDisplay(deck[card1].name + " (REVERSE)", deck[card1].reverseDesc, document.getElementById("card1").src);
        }
    }
}

function card2desc(){
    if(card2 != -1){
        if(card2orientation == 0){
            modalDisplay(deck[card2].name, deck[card2].desc, document.getElementById("card2").src);
        }else if(card2orientation == 1){
            modalDisplay(deck[card2].name + " (REVERSE)", deck[card2].reverseDesc, document.getElementById("card2").src);
        }
    }
}

function card3desc(){
    if(card3 != -1){
        if(card3orientation == 0){
            modalDisplay(deck[card3].name, deck[card3].desc, document.getElementById("card3").src);
        }else if(card3orientation == 1){
            modalDisplay(deck[card3].name + " (REVERSE)", deck[card3].reverseDesc, document.getElementById("card3").src);
        }
    }
}

function modalDisplay(name, description, image){
    document.getElementById("enlargeCard").src = image
    document.getElementById("title").innerHTML = name
    document.getElementById("description").innerHTML = description
    document.getElementById("imgPopup").style.display = "block";

}

window.onclick = function(event){
    if (event.target == document.getElementById("imgPopup")) {
        document.getElementById("imgPopup").style.display = "none";
      }
}
