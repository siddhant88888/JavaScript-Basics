
let sum = 0

let hasBlackJack = false 

let isAlive = false

let message = ''
let messageEl = document.getElementById('message-el')

let sumEl = document.querySelector('#sum-el')
let cardEl = document.getElementById('cards-el')
let cards = []

let player = {
    name: 'Per',
    chips: 145

}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + " : " + '$' + player.chips

function getRandomCard(){
    let num = Math.floor(Math.random() * 14) 
    if (num === 1 ) {
        return 11
    } else if (num > 10 ) {
        return 10
    } else {
        
        return num
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    sumEl.textContent = 'Sum: ' + sum
    cardEl.textContent='Cards: '
    // cardEl.textContent = 'Cards: ' + cards[0] + ' ' + cards[1]

    for(let count = 0; count<cards.length; count++) {
        cardEl.textContent += cards[count] + ' '
    }
    if (sum <= 20 ) {
        message = 'New card?'
        isAlive = true
    } else if (sum === 21) {
        message = 'BlackJack!!' 
        hasBlackJack = true
    } else {
        message = 'You lost!'
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack ===false) {

        console.log('New card')
        let new_card = getRandomCard() 
        cards.push(new_card)
        console.log(cards)
        sum += new_card
        
        renderGame()
    }

}
console.log(messageEl)
console.log(message)

