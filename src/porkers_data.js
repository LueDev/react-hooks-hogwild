const hogs = [
  {
    name: "Spiderpig",
    specialty: "Fights Crime",
    greased: true,
    weight: 42,
    "highest medal achieved": "Saved the spider-verse",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Babe",
    specialty: "Being incredibly cute",
    greased: false,
    weight: 2.0,
    "highest medal achieved": "bronze",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
  },
  {
    name: "Porkchop",
    specialty: "Making friends",
    greased: true,
    weight: 1.6,
    "highest medal achieved": "silver",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/porkchop.jpg",
  },
  {
    name: "Cherub",
    specialty: "Flying",
    greased: false,
    weight: 0.7,
    "highest medal achieved": "gold",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/cherub.jpg",
  },
  {
    name: "Piggy smalls",
    specialty: "Rapping",
    greased: true,
    weight: 5.1,
    "highest medal achieved": "platinum",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/piggy_smalls.jpg",
  },
  {
    name: "Trouble",
    specialty: "Racing",
    greased: true,
    weight: 1.7,
    "highest medal achieved": "gold",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/trouble.jpg",
  },
  {
    name: "Piglet",
    specialty: "Bravery and friendship",
    greased: false,
    weight: 2.2,
    "highest medal achieved": "silver",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/piglet.jpg",
  },
  {
    name: "Peppa",
    specialty: "Being adventurous",
    greased: false,
    weight: 3.7,
    "highest medal achieved": "wood",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/peppa.jpg",
  },
  {
    name: "Truffle Shuffle",
    specialty: "Peeling oranges",
    greased: true,
    weight: 4.0,
    "highest medal achieved": "gold",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/truffle_shuffle.jpg",
  },
  {
    name: "Bailey",
    specialty: "Finding truffles",
    greased: false,
    weight: 2.3,
    "highest medal achieved": "bronze",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/bailey.jpg",
  },
  {
    name: "Galaxy Note",
    specialty: "Cuddling",
    greased: true,
    weight: 1.9,
    "highest medal achieved": "diamond",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/galaxy_note.jpg",
  },
  {
    name: "Leggo My Eggo",
    specialty: "Babysitting",
    greased: true,
    weight: 3.3,
    "highest medal achieved": "platinum",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/leggo_my_eggo.jpg",
  },

];

export default hogs;
