// Put your code here

console.log("Do you believe in magic");
console.log("-----------------------");


let getAllSpells = () => {
    let allSpells = [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyRequired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyRequired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyRequired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe.",
            IsEvil: true,
            EnergyRequired: 100.0
        },
        {
            Name: "Convince your relatives your political view are correct.",
            IsEvil: false,
            EnergyRequired: 2921.5
        },
    ]
    return allSpells;
}



let makeGoodSpellBook = (allSpells) => {
    let goodBook = {};
    goodBook.title = "Good Book";
    goodBook.spells = [];
    allSpells.forEach(spell => {
        if(spell.IsEvil === false) {
            goodBook.spells.push(spell);
        }
    });
    return goodBook;
}
let makeEvilSpellBook = (allSpells) => {
    let evilBook = {};
    evilBook.title = "Evil Book";
    evilBook.spells = [];
    allSpells.forEach(spell => {
        if(spell.IsEvil === true) {
            evilBook.spells.push(spell);
        }
    });
    return evilBook;
    
}

let displaySpellBook = (book) => {
    book.spells.forEach(spell => {
        console.log(`   ${spell.Name}`)
    });
}


let allSpells = getAllSpells();
let goodBook = makeGoodSpellBook(allSpells);
let evilBook = makeEvilSpellBook(allSpells);

displaySpellBook(goodBook);
displaySpellBook(evilBook);