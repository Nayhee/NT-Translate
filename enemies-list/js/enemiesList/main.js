// Put your code here


let getEnemies = () => {
    let enemies = [
        {
            FirstName: "Joshua",
            LastName: "Flowers",
            Offenses: ["Being a jerk to me in elementary school", "Not being nice to me in elementary school"],
            IsReallyHated: true
        },
        {
            FirstName: "Darth",
            LastName: "Vadar",
            Offenses: ["Cut off Luke's hand", "Murdered all those kids", "Unkind management practices"],
            IsReallyHated: false
        },
        {
            FirstName: "Betty",
            LastName: "RudeLady",
            Offenses: ["Phone calls in the theater", "Phone calls on the bus", "Phonec alls in line at the grocery store", "Poor conversationalist"],
            IsReallyHated: true
        },
        {
            FirstName: "Leon",
            LastName: "Peck",
            Offenses: ["Keeps giving me a hotplate"],
            IsReallyHated: false
        },
    ];
    return enemies;
}

let enemies = getEnemies();

enemies.forEach(enemy => {
    if(enemy.IsReallyHated) {
        console.log(`${enemy.FirstName} ${enemy.LastName} (Really, really dislike!)`);

    } else {
        console.log(`${enemy.FirstName} ${enemy.LastName}`);
    }
})