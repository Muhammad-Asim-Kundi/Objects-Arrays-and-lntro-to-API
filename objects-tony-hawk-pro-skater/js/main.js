//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawk(name,fightStyle,health,medals){
    this.name= name
    this.fightStyle = fightStyle
    this.health= health
    this.medals = medals
    this.fight = function(){
        alert(`${this.name} has a good fighting techniques`)
    }

    this.chanpionship = function(){
        alert(`he is ${this.medals} medals holder`)
    }

    this.style = function(){
        alert(`${this.name} is black belt in ${this.fightStyle}`)
    }

}

let fighter = new TonyHawk('Adil','judo','good',4)