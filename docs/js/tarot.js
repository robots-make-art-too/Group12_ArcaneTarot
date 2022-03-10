function Card(name, description, image){
    this.name = name;
    this.desc = description;
    this.img = image;
}

var deck = [
    new Card("Ace of Swords", "Placeholder description", "img/card_1.png"),
    new Card("Two of Swords", "Placeholder description", "img/card_2.png"),
    new Card("Three of Swords", "Placeholder description", "img/card_3.png"),
    new Card("Four of Swords", "Placeholder description", "img/card_4.png"),
    new Card("Five of Swords", "Placeholder description", "img/card_5.png"),
    new Card("Six of Swords", "Placeholder description", "img/card_6.png"),
    new Card("Seven of Swords", "Placeholder description", "img/card_7.png"),
    new Card("Eight of Swords", "Placeholder description", "img/card_8.png"),
    new Card("Nine of Swords", "Placeholder description", "img/card_9.png"),
    new Card("Ten of Swords", "Placeholder description", "img/card_10.png"),
    new Card("Page of Swords", "Placeholder description", "img/card_11.png"),
    new Card("Knight of Swords", "Placeholder description", "img/card_12.png"),
    new Card("Queen of Swords", "Placeholder description", "img/card_13.png"),
    new Card("King of Swords", "Placeholder description", "img/card_14.png")
]

var card1 = -1;
var card2 = -1;
var card3 = -1;
var currentCard = 1;

function drawCard(){
    if(currentCard == 1){
        num = parseInt(Math.random()*14);
        card1 = num;
        document.getElementById("card1").src = deck[card1].img;
        currentCard = 2;
    } else if(currentCard == 2){
        num = parseInt(Math.random()*14);
        card2 = num;
        document.getElementById("card2").src = deck[card2].img;
        currentCard = 3;
    } else if(currentCard == 3){
        num = parseInt(Math.random()*14);
        card3 = num;
        document.getElementById("card3").src = deck[card3].img;
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
}

function card1desc(){
    if(card1 != -1){
        modalDisplay(deck[card1].name, deck[card1].desc, deck[card1].img);
    }
}

function card2desc(){
    if(card2 != -1){
        modalDisplay(deck[card2].name, deck[card2].desc, deck[card2].img);
    }
}

function card3desc(){
    if(card3 != -1){
        modalDisplay(deck[card3].name, deck[card3].desc, deck[card3].img);
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