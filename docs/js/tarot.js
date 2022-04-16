function Card(name, description, image, reverse, reverseDesc, inspection, inspectionReverse){ //Create a function that constructs a card object.  This card has a name, description, iamge, reverse, reverse description, an inspection, and a reverse inspection
    this.name = name;
    this.desc = description;
    this.img = image;
    this.down = reverse;
    this.reverseDesc = reverseDesc;
    this.inspection = inspection;
    this.inspectionReverse = inspectionReverse;
}


var deck = [ //an array for our deck of cards; use function Card to construct 14 different cards which hold properties for their reverses
    new Card("Ace of Swords", "Stay focused and resolute, for you are about to reach your objective.", "img/AceOfSwords.png", "img/AceOfSwords_reversed.png", "You are not allowing yourself to see the things that matter the most.  You may be creating obstacles rather than cutting through them.", "img/card_1.png", "img/card_1_reversed.png"),
    new Card("Two of Swords", "Wait until the timing is right and all the facts are clear before taking action.", "img/TwoOfSwords.png", "img/TwoOfSwords_reversed.png", "In the moment you think you are absolutely right, seek the views of others.  You have the ability to create synergy.", "img/card_2.png", "img/card_2_reversed.png"),
    new Card("Three of Swords", "It might be healthier to disentangle yourself and start fresh.", "img/ThreeOfSwords.png", "img/ThreeOfSwords_reversed.png", "Become more independent and seperate yourself from people and forces you do not feel compatible with.", "img/card_3.png", "img/card_3_reversed.png"),
    new Card("Four of Swords", "Concentrate less on the opinions and biases of others. Be open to intuition and insight from a deeper source.", "img/FourOfSwords.png", "img/FourOfSwords_reversed.png", "If you spend too much time in contemplation, you might disregard how others feel.  Observe your situation closely before sharing your thoughts.", "img/card_4.png", "img/card_4_reversed.png"),
    new Card("Five of Swords", "Challenge the pessimism of others around you by evoking their higher nature", "img/FiveOfSwords.png", "img/FiveOfSwords_reversed.png", "Let go of your judgemental tendencies.  Then can you proceed in a more creative and positive way.", "img/card_5.png", "img/card_5_reversed.png"),
    new Card("Six of Swords", "Others will be grateful that you responded quickly to the need for immediate action.", "img/SixOfSwords.png", "img/SixOfSwords_reversed.png", "You are not using your rational mind to its fullest potential, as such your perception of your situation may be limited.", "img/card_6.png", "img/card_6_reversed.png"),
    new Card("Seven of Swords", "Discipline yourself to stay focused on the desired outcome and you will make your way past all competing circumstances.", "img/SevenOfSwords.png", "img/SevenOfSwords_reversed.png", "Heroic efforts sometimes do not fully succeed, but if you have done the best you could, then you are still a noble soul.", "img/card_7.png", "img/card_7_reversed.png"),
    new Card("Eight of Swords", "Rise to the occasion with confidence in your talent and ability.", "img/EightOfSwords.png", "img/EightOfSwords_reversed.png", "Be careful against the tedency to rationalize and project blame onto others.  Judge yourself by the standards you hold everyone eles to.", "img/card_8.png", "img/card_8_reversed.png"),
    new Card("Nine of Swords", "Honestly admit to yourself that you have sacrificed time and energy on a situation that simply does not work.", "img/NineOfSwords.png", "img/NineOfSwords_reversed.png", "There lies for you an oppotunity to free yourself from negativity.  You'll soon have a breakthrough.", "img/card_9.png", "img/card_9_reversed.png"),
    new Card("Ten of Swords", "Protect yourself while the storm rages and focus on rebuilding after it passes.", "img/TenOfSwords.png", "img/TenOfSwords_reversed.png", "You may be over-dramatizing your predicament.  Be mindful of excuses or made up stories.", "img/card_10.png", "img/card_10_reversed.png"),
    new Card("Page of Swords", "Circumstances call for anonymous action even if you would prefer to receive credit.", "img/PageOfSwords.png", "img/PageOfSwords_reversed.png", "Be mindful of your critical tendencies.  Analyze your possible prejudice, instead of the weakness of others", "img/card_11.png", "img/card_11_reversed.png"),
    new Card("Knight of Swords", "Refine your communication and negotiation skills so you are at peak effectiveness.", "img/KnightOfSwords.png", "img/KnightOfSwords_reversed.png", "Your fear of conflict may enable needless sacrifice.  You will say what you don't mean or promise what you can't deliver just to free yourself from stress.", "img/card_12.png", "img/card_12_reversed.png"),
    new Card("Queen of Swords", "Make your own decisions. Exercise as much independence as you know you can handle.", "img/QueenOfSwords.png", "img/QueenOfSwords_reversed.png", "You're building a prejudice against your own needs.  Embrace your depeest feelings.", "img/card_13.png", "img/card_13_reversed.png"),
    new Card("King of Swords", "Listen to the inner wisdom offered by the wise elder that dwells inside of you.", "img/KingOfSwords.png", "img/KingOfSwords_reversed.png", "Hold yourself to a higher standard and think about what you can contribute, not what you are going to get.", "img/card_14.png", "img/card_14_reversed.png")
]

//set up variables for the three cards; this will determine how they appear when they are drawn
var card1 = -1;
var card1orientation = 0;
var card2 = -1;
var card2orientation = 0;
var card3 = -1;
var card3orientation = 0;
var currentCard = 1;

function drawCard(){ //draw card function, here it communicates to the html and makes it do something based on user interaction
    if(currentCard == 1){ //We start with currentCard = 1; this initiates the ability to draw the first card
        num = parseInt(Math.random()*deck.length); //num = a randomly generated number based on the length of the deck
        card1orientation = parseInt(Math.random()*2); //randomly generate a value 0-1, if its 0 then the card is upright, otherwise its reversed
        card1 = num; //assign the card as the randomly generated number
        document.getElementById("card1").src = deck[card1].img; //retrieve from the array above based on what number was generated, then grab id = "card1" from HTML and set the image, which began as a cardback, to the card front of the generated card
        if(card1orientation == 1){ //If the card orientation is 1, which signifies the card is a reverse, then use the upside down version of the card instead
            document.getElementById("card1").src = deck[card1].down;
        }

        currentCard = 2; //the currentCard is 2, which allows us to move on to the second part of the function:
    } else if(currentCard == 2){ 
        do{
            num = parseInt(Math.random()*deck.length); //randomly generate a num again for another card
        }while(num == card1); //if the number is the same as the card before, then re-generate a random numbber
        card2orientation = parseInt(Math.random()*2); //randomly generate a card orientation
        card2 = num; //assign that number to card2
        document.getElementById("card2").src = deck[card2].img; //access the element with id = "card2" in the html and change the image to the randomly generated card
        if(card2orientation == 1){ 
            document.getElementById("card2").src = deck[card2].down; //assign it as the reveresed version if the card orientation is 1
        }

        currentCard = 3; //set currentCard to 3 to proceed with the function
    } else if(currentCard == 3){
        do{ //same process as before; randomly generate a card, regenerate if it already exists
            num = parseInt(Math.random()*deck.length);
        }while(num == card1 || num == card2);
        card3orientation = parseInt(Math.random()*2); 
        card3 = num; 
        document.getElementById("card3").src = deck[card3].img;
        if(card3orientation == 1){
            document.getElementById("card3").src = deck[card3].down;
        }

        currentCard = 0; //the current card is 0.  The function ends here.
    }
}

function reset(){ //Linked with the reset button, reset the cards back to cardbacks and return the values intiialized before the drawCard() function.  This allows the user to generate more cards
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

function card1desc(){ //Set how the first card is viewable in the popup when clicked on
    if(card1 != -1){
        if(card1orientation == 0){
            
            modalDisplay(deck[card1].name, deck[card1].desc, document.getElementById("enlargeCard").scr = deck[card1].inspection); //name of the card, description, and display another picture of that card with the QR code for the AR camera and its marker
        }else if(card1orientation == 1){
            modalDisplay(deck[card1].name + " (REVERSE)", deck[card1].reverseDesc, document.getElementById("enlargeCard").src = deck[card1].inspectionReverse); //for reversed cards
        }
    }
}

function card2desc(){
    if(card2 != -1){
        if(card2orientation == 0){
            modalDisplay(deck[card2].name, deck[card2].desc, document.getElementById("enlargeCard").src = deck[card2].inspection);//name of the card, description, and display another picture of that card with the QR code for the AR camera and its marker
        }else if(card2orientation == 1){
            modalDisplay(deck[card2].name + " (REVERSE)", deck[card2].reverseDesc, document.getElementById("enlargeCard").src = deck[card2].inspectionReverse);//for reversed cards
        }
    }
}

function card3desc(){
    if(card3 != -1){
        if(card3orientation == 0){
            modalDisplay(deck[card3].name, deck[card3].desc, document.getElementById("enlargeCard").src = deck[card3].inspection);//name of the card, description, and display another picture of that card with the QR code for the AR camera and its marker
        }else if(card3orientation == 1){
            modalDisplay(deck[card3].name + " (REVERSE)", deck[card3].reverseDesc, document.getElementById("enlargeCard").src = deck[card3].inspectionReverse);//for reversed cards
        }
    }
}

function modalDisplay(name, description, inspection){ //Function to display the cards in the popup.  We need the card name, description, and its inspection; an image of the card with its respective QR code and marker
    document.getElementById("enlargeCard").src = inspection
    document.getElementById("title").innerHTML = name
    document.getElementById("description").innerHTML = description
    document.getElementById("imgPopup").style.display = "block";

}

window.onclick = function(event){ //when the user clicks off the popup, hide it
    if (event.target == document.getElementById("imgPopup")) {
        document.getElementById("imgPopup").style.display = "none";
      }
}
