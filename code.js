let name = ['Mario', 'Luigi', 'Peach', 'Daisy', 'Waluigi']

let wins = [10, 8, 6, 4, 2]


let champion = [name[0] > name[1], name[1] > name[2],
name[2] > name[3], name[3] > name[4], name[4] > name[5]]

function newCharacterUnlocked() {
    return name.push('Bowser')
}

if (champion[0]) {
    newCharacterUnlocked
    console.log('Bowser has joined the Roster!!')
}

