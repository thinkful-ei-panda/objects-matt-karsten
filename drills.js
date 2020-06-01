/* eslint-disable no-prototype-builtins */
/* eslint-disable strict */
const loaf = {
  flour: 300,
  water: 210,
  hydration () {
    return this.water / (this.flour * 100);
  }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

const obj = {
  foo: 2,
  bar: 5,
  fum: 8,
  quux: 1,
  spam: 9
};


for (const property in obj) {
  console.log(`${property}: ${obj[property]}`);
}

const hobbit = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbit.meals[3]);


const people = [
  {
    name: 'Bob',
    jobTitle: 'Surgeon',
    boss: 'Samwise'
  },
  {
    name: 'Samwise',
    jobTitle: 'Hero of the story'    
  },
  {
    name: 'Susan',
    jobTitle: 'Traveling crystal saleswoman',
    boss: 'Samwise'
  },
  {
    name: 'Caroline',
    jobTitle: 'Neighborhood plant lady',
    boss: 'Samwise'
  }
];

people.forEach(item => {
  if (item.hasOwnProperty('boss')) {
    console.log(`${item.jobTitle} reports to ${item.boss}`);
  } else {
    console.log(`Founder ${item.name} doesn'treport to anybody`);
  } 
});


function createCharacters(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe() {
      console.log(`${name} is a ${race} from ${origin} who uses a ${weapon}.`);
    },
    evaluateFight(character) {
      
      let x = character.defense - this.attack;
      let y = this.defense - character.attack;
      
      if (x > 0 ) {
        x = 0;
      }
      if (y > 0) {
        y = 0;
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  };
}
const characters = [
  createCharacters('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'),
  createCharacters('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'The Ring'),
  createCharacters('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'Sting and Barrow Blade'),
  createCharacters('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacters('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'),
  createCharacters('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 9, 'Handhafang')
];

console.log(characters);

const aragorn = characters.find(function(name) {
  if (name.nickname === 'aragorn') {
    name.describe();
  }
});


const hobbits = characters.filter((character) => {
  if(character.race === 'Hobbit') {
    return character;
  }
});

console.log(hobbits);

const plus5 = characters.filter(function(character) {
  if(character.attack > 5) {
    return character;
  }
});

console.log(plus5);

// const cipher = {
//   'a': ,// character at index 2
//   'b': ,// character at index 3
//   'c': ,// character at index 4
//   'd': ,// character at index 5
//   ' ': // 
// };


// decodeWords as function
// seperate string into array seperated by space
// check index of every new array for decode character
// if decode character  is found, add nth character of word to new array or push ' ' if no match
// return new array as a string


// word[0] === cipher.a 
// word = word[2];
// 
const cipher=  {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4
};

function decode (word) {
  if (cipher.hasOwnProperty(word[0]))
  {
    return (word[cipher[word[0]]]);
  } else {
    return ' ';
  }
}


const sentence = ' craft block argon meter bells brown croon droop ';

function decodeWords(sentence){
  // const array = sentence.trim().split(' ');
  
  // console.log(array.map(item => decode(item)).join(''));
  console.log(sentence
    .trim()
    .split(' ')
    .map(item => decode(item))
    .join(''));
}


decodeWords(sentence);



