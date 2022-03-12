const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


//***MAP***  USED FOR GETTING ONLY WANTED PROPERTIES
//1. Get array of all names
        // const names = characters.map((characters) => {
        //     return characters.name
        // });
const names = characters.map((characters) => characters.name);
//2. Get array of all heights
const heights = characters.map((characters) => characters.height);
//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map(character => ({
    name: character.name,
    height: character.height
}));
//4. Get array of all first names
const firstNames = characters.map(character => character.name.split(' ')[0]);

/*
console.log('----------------------------------------------')
console.log('----- MAP ( Only get specific properties)-----')
console.log(names);
console.log(heights);
console.log(minifiedRecords);
console.log(firstNames);
console.log('----------------------------------------------')
*/


//***REDUCE***
    // acc = accumulator
    // cur = current
//1. Get total mass of all characters
            // const totalMass = characters.reduce((acc,cur) => {
            //     return acc + cur.mass 
            // }, 0);
const totalMass = characters.reduce((acc,cur) => acc + cur.mass , 0);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc,cur) => acc + cur.height , 0);
//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc,cur) => {
    const color = cur.eye_color;
    if (acc[color]){
        acc[color]++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {})
//4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc,cur) => acc + cur.name.length , 0);

/*
console.log('----------------------------------------------')
console.log('----- REDUCE ( ADD TOTAL )-----')
console.log("Total Mass " + totalMass);
console.log("Total Height " + totalHeight);
console.log(charactersByEyeColor);
console.log("Total Name Characters " + totalNameCharacters);
console.log('----------------------------------------------')
*/

//***FILTER***

//1. Get characters with mass greater than 100
            // const greater100Characters = characters.filter( character => {
            //     return character.mass > 100
            // });
const greater100Characters = characters.filter(
    (character) => character.mass > 100
);
//2. Get characters with height less than 200
const shorter200Characters = characters.filter(
    (character) => character.height < 200
);
//3. Get all male characters
const malecharacters = characters.filter(
    (character) => character.gender === 'male'
);
//4. Get all female characters
const femalecharacters = characters.filter(
    (character) => character.gender === 'female'
);

/*
console.log('----------------------------------------------')
console.log('-FILTER (ONLY SHOW DATA THAT MATCH CRITERIA)--')
console.log(greater100Characters);
console.log(shorter200Characters);
console.log(malecharacters);
console.log(femalecharacters);
console.log('----------------------------------------------')
*/



//***SORT***
//1. Sort by mass
        // const sortByMass = characters.sort((a,b) => {
        //     return a.mass - b.mass; // ascending
        //     // return b.mass - a.mass; // descending
        // })
const sortByMass = characters.sort((a,b) => a.mass - b.mass);
//2. Sort by height
const sortByHeight = characters.sort((a,b) => a.height - b.height);
//3. Sort by name
const sortByName = characters.sort((a,b) => {
    if(a.name < b.name) return -1;
    return 1;  // switch -1 and 1 if you want descending
})
//4. Sort by gender
const sortByGender = characters.sort((a,b) => {
    if(a.gender === "female") return -1;
    return 1;  // switch -1 and 1 if you want descending
})
/*
console.log('----------------------------------------------')
console.log('---------------SORT (ASC DESC)----------------')
console.log(sortByMass);
console.log(sortByHeight);
console.log(sortByName);
console.log(sortByGender);
console.log('----------------------------------------------')
*/



//***EVERY***
//1. Does every character have blue eyes?
        // const allBlueEyes = characters.every((character) => {
        //     return character.eye_color === 'blue';
        // })
const allBlueEyes = characters.every((character) => character.eye_color === 'blue')
//2. Does every character have mass more than 40?
const allMass41up = characters.every((character) => character.mass > 40)
//3. Is every character shorter than 200?
const allHeight199Below = characters.every((character) => character.height < 200)
//4. Is every character male?
const allMale = characters.every((character) => character.mass === 'male')

/*
console.log('----------------------------------------------')
console.log('--------EVERY (do they ALL have ___ ?)--------')
console.log(allBlueEyes);
console.log(allMass41up);
console.log(allHeight199Below);
console.log(allMale);
console.log('----------------------------------------------')
*/



//***SOME***
//1. Is there at least one male character?
        // const oneMaleCharacter = characters.some((character) => {
        //     return character.gender === "male"
        // });
const oneMaleCharacter = characters.some(
    (character) => character.gender === "male"
);
//2. Is there at least one character with blue eyes?
const oneBlueEyesCharacter = characters.some(
    (character) => character.eye_color === "blue"
);
//3. Is there at least one character taller than 210?
const oneTallerThan210Character = characters.some(
    (character) => character.height > 210
);
//4. Is there at least one character that has mass less than 50?
const oneMassLess50Character = characters.some(
    (character) => character.mass > 50
);

console.log('----------------------------------------------')
console.log('-- SOME (atleast ONE of them are/have ___ ?)--')
console.log('male : ' + oneMaleCharacter);
console.log('blue eyes : ' + oneBlueEyesCharacter);
console.log('taller than 210 : ' + oneTallerThan210Character);
console.log('mass less than : ' + oneMassLess50Character);
console.log('----------------------------------------------')


//***MAP***   ---  USED FOR GETTING ONLY WANTED PROPERTIES
//***REDUCE***   ---   USED FOR ADDING OR GETTING TOTAL/SUM
//***FILTER***   ---   GETTING ONLY SPECIFIC DATA
//***SORT***   ---   DESC OR ASC
//***EVERY***   ---   DO ALL OF THEM HAVE THIS?
//***SOME***   ---   DOES ONE OF THEM HAVE THIS?
