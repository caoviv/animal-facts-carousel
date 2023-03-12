// local reviews data
const facts = [
  {
    id: 1,
    animal: "Golden Poison Dart Frog",
    type: "terrifying",
    img: "https://images.unsplash.com/photo-1465502122287-9eab969fac20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVuJTIwcG9pc29uJTIwZGFydCUyMGZyb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    fact: "The golden poison dart frog (Phyllobates terribilis) is the size of a paperclip... but don’t be deceived by its tiny size! Its skin is coated in a lethal toxin that leaves the nerves and muscles of its victims inactive, leading to death. This little frog contains about one milligram of poison, enough to kill 10 - 20 humans if the poison reaches their bloodstreams.",
  },
  {
    id: 2,
    animal: "otter",
    type: "cute",
    img: "https://i.kym-cdn.com/entries/icons/original/000/000/410/otters.jpg",
    fact: "Otters “hold hands” while sleeping, so they don’t float away from each other.",
  },
  {
    id: 3,
    animal: "Silver-headed antechinus",
    type: "spicy",
    img: "https://inqld.com.au/wp-content/uploads/2021/08/Untitled-1-10.jpg?fit=850%2C455?w=550&h=330",
    fact: "During the mating season, the males system is pumped with so much cortisol that it can go blind, lose hair and even bleed internally. Despite all this it will continue to mate until it inevitably dies. Either the survival of the species is more important to it than its own survival, or it’s just really thirsty and desperate to make love.",
  },
  {
    id: 4,
    animal: "Platypus",
    type: "scary",
    img: "https://images.unsplash.com/photo-1605687720340-696371e40e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    fact: "Platypuses are venomous. They might look cute and cuddly, but come across a male platypus in mating season and you’ll be in for a painful shock. Male platypuses have a hollow spur on each hind leg connected to a venom secreting gland, and while their venom is lethal, there are no recorded deaths from platypuses or from platypus stings.",
  },
  {
    id: 5,
    animal: "Polar Bear",
    type: "interesting",
    img: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    fact: "Beneath all that thick fur, polar bears have jet black skin. The polar bear’s fur is also translucent, and only appears white because it reflects visible light.",
  },
  {
    id: 6,
    animal: "Tiger",
    type: "ancient",
    img: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    fact: "Tigers have been around about 2 million years ago",
  },
  {
    id: 7,
    animal: "Giraffe",
    type: "moist",
    img: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    fact: "Giraffes only need to drink once every few days. Most of their water comes from all the plants they eat.",
  },
  {
    id: 8,
    animal: "French Bulldog",
    type: "kinda sad",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    fact: "As a result of their squat frame and bulbous head, French bulldogs can’t swim.",
  },
  {
    id: 9,
    animal: "panda",
    type: "survival",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    fact: "The giant panda's distinct black-and-white markings have two functions: camouflage and communication. Most of the panda - its face, neck, belly, rump - is white to help it hide in snowy habitats. The arms and legs are black, helping it to hide in shade.",
  },
  {
    id: 10,
    animal: "leopard",
    type: "lonely",
    img: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    fact: "Leopards are very solitary and spend most of their time alone. They each have their own territory, and leave scratches on trees, urine scent marks and poop to warn other leopards to stay away! Males and females will cross territories, but only to mate.",
  },
];

//variables - select items
const img = document.getElementById("img");
const animal = document.getElementById("animal");
const type = document.getElementById("type");
const fact = document.getElementById("fact");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 1;

// event listeners
// load initial item
window.addEventListener("DOMContentLoaded", showFact);
// show next review
nextBtn.addEventListener("click", nextFact);
// show previous review
prevBtn.addEventListener("click", prevFact);
// show random review
randomBtn.addEventListener("click", randomFact);

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
function nextFact() {
  currentItem++;
  if (currentItem > facts.length - 1) {
    currentItem = 0;
  }
  showFact(currentItem);
}

// move to previous review in array
function prevFact() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = facts.length - 1;
  }
  showFact(currentItem);
}

// show random review in array
function randomFact() {
  currentItem = Math.floor(Math.random() * facts.length);

  showFact(currentItem);
}
