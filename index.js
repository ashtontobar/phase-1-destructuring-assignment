

// Strings---------------------------------------------------------------------------
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
console.log(moo)
console.log(neigh)
console.log(baa)
console.log(oink)
console.log(cluck)

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, , dolly, babe, little] = farmAnimals.split(' ')
console.log(bessie)
console.log(dolly)
console.log(babe)
console.log(little)

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, ,black, pink, ] = farmAnimals.split(' ')
console.log(blackAndWhite)
console.log(black)
console.log(pink)

// Arrays-------------------------------------------------------------------------------
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, indg, v] = colors
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
// const [r, o, y, g, b, indg, v] = colors

// Objects-------------------------------------------------------------------------------
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 7. Use destructuring to assign all variables using the keys as the variable names
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const {muppetName, color, song, job, partner} = muppet
const {nestedName, nestedColor, album, nestedJob, nestedPartner} = nestedMuppet

// const {theMuppetMovie} = nestedMuppet.album
const {song1, song2, song3, song4} = nestedMuppet.album.theMuppetMovie


