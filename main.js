// local reviews data
const facts = [
    {
      id: 1,
      animal: "susan smith",
      type: "web developer",
      img:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      fact:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      animal: "anna johnson",
      type: "web designer",
      img:
        "https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      fact:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee eanimall pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      animal: "peter jones",
      type: "intern",
      img:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      fact:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      animal: "bill anderson",
      type: "the boss",
      img:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      fact:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
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