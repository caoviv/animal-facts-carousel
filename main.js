// local reviews data
const facts = [
    {
      id: 1,
      animal: "golden poison dart frog",
      type: "Terrifying",
      img:
        "https://images.unsplash.com/photo-1465502122287-9eab969fac20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVuJTIwcG9pc29uJTIwZGFydCUyMGZyb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      fact:
        "The golden poison dart frog (Phyllobates terribilis) is the size of a paperclip... but don’t be deceived by its tiny size! Its skin is coated in a lethal toxin that leaves the nerves and muscles of its victims inactive, leading to death. This little frog contains about one milligram of poison, enough to kill 10 - 20 humans if the poison reaches their bloodstreams.",
    },
    {
      id: 2,
      animal: "Otter",
      type: "cute",
      img:
        "https://i.kym-cdn.com/entries/icons/original/000/000/410/otters.jpg",
      fact:
        "Otters “hold hands” while sleeping, so they don’t float away from each other.",
    },
    {
      id: 3,
      animal: "silver-headed antechinus",
      type: "spicy",
      img:
        "https://inqld.com.au/wp-content/uploads/2021/08/Untitled-1-10.jpg?fit=850%2C455?w=550&h=330",
      fact:
        "During the mating season, the males system is pumped with so much cortisol that it can go blind, lose hair and even bleed internally. Despite all this it will continue to mate until it inevitably dies. Either the survival of the species is more important to it than its own survival, or it’s just really thirsty and desperate to make love.",
    },
    {
      id: 4,
      animal: "Platypus",
      type: "Scary",
      img:
        "https://images.unsplash.com/photo-1605687720340-696371e40e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      fact:
        "Platypuses are venomous. They might look cute and cuddly, but come across a male platypus in mating season and you’ll be in for a painful shock. Male platypuses have a hollow spur on each hind leg connected to a venom secreting gland, and while their venom is lethal, there are no recorded deaths from platypuses or from platypus stings.",
    },
];

//variables - select items
const img = document.getElementById('img');
const animal = document.getElementById('animal');
const type = document.getElementById('type');
const fact = document.getElementById('fact');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item 
let currentItem = 1;

// event listeners
// load initial item 
window.addEventListener('DOMContentLoaded', showFact);
// show next review 
nextBtn.addEventListener('click', nextFact);
// show previous review 
prevBtn.addEventListener('click', prevFact);
// show random review 
randomBtn.addEventListener('click', randomFact);

// functions 
// show review based on item 
function showFact() {
  const item = facts[currentItem];
  img.src = item.img;
  animal.textContent = item.animal;
  type.textContent = item.type;
  fact.textContent = item.fact;
}

// move to next review in array 
function nextFact () {
  currentItem ++;
  if (currentItem > facts.length - 1) {
    currentItem = 0;
  }
  showFact(currentItem);
}

// move to previous review in array 
function prevFact () {
  currentItem --;
  if (currentItem < 0) {
    currentItem = facts.length - 1;
  }
  showFact(currentItem);
}

// show random review in array 
function randomFact () {
  currentItem = Math.floor(Math.random() * facts.length)

  showFact(currentItem);
}