function Card(name, description, image){
    this.name = name;
    this.desc = description;
    this.img = image;


}

var deck = [
    new Card("Ace of Swords", "Placeholder description", "Placeholder image"),
    new Card("Two of Swords", "Placeholder description", "Placeholder image"),
    new Card("Three of Swords", "Placeholder description", "Placeholder image"),
    new Card("Four of Swords", "Placeholder description", "Placeholder image"),
    new Card("Five of Swords", "Placeholder description", "Placeholder image"),
    new Card("Six of Swords", "Placeholder description", "Placeholder image"),
    new Card("Seven of Swords", "Placeholder description", "Placeholder image"),
    new Card("Eight of Swords", "Placeholder description", "Placeholder image"),
    new Card("Nine of Swords", "Placeholder description", "Placeholder image"),
    new Card("Ten of Swords", "Placeholder description", "Placeholder image"),
    new Card("Page of Swords", "Placeholder description", "Placeholder image"),
    new Card("Knight of Swords", "Placeholder description", "Placeholder image"),
    new Card("Queen of Swords", "Placeholder description", "Placeholder image"),
    new Card("King of Swords", "Placeholder description", "Placeholder image")
]

function drawCard(){
    num = parseInt(Math.random()*14);
    card = deck[num];
    alert(num);
    alert(card.name);
    alert(card.desc);
    alert(card.img)
}