function calculateMaxPoints(scrabbleHand) {
    let sum = 0;
    for (tile of scrabbleHand) {
        sum += tile.points;
    }
    return sum;
}

let scrabbleHand = [
    { letter: "A", points: 1 },
    { letter: "B", points: 3 },
    { letter: "C", points: 3 },
    { letter: "D", points: 2 },
    { letter: "E", points: 1 },
    { letter: "F", points: 4 },
    { letter: "G", points: 2 },
]
console.log("Max points: " + calculateMaxPoints(scrabbleHand));