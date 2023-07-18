// console.log("Hello world!");

// Selecting DOM elements
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://vkiellyekgxbvykgskys.supabase.co/rest/v1/facts",
    {
      headers: {
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZraWVsbHlla2d4YnZ5a2dza3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MzM0NjMsImV4cCI6MjAwMjUwOTQ2M30.plMcxLEuJWc0Yy4_rgGOcgebYQysbbKjzXAFQBtPNMk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZraWVsbHlla2d4YnZ5a2dza3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MzM0NjMsImV4cCI6MjAwMjUwOTQ2M30.plMcxLEuJWc0Yy4_rgGOcgebYQysbbKjzXAFQBtPNMk",
      },
    }
  );
  const data = await res.json();
  // console.log(data);
  createFactsList(data);
}

// createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
      <p>
      ${fact.text}
        <a
          class="source"
          href="${fact.source}"
          target="_blank"
        >(Source)</a>
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((cat) => cat.name === fact.category).color
      }">${fact.category}</span>
      <div class="vote-buttons">
      <button>👍 ${fact.votesInteresting}</button>
      <button>🤯 ${fact.votesMindblowing}</button>
      <button>⛔️ ${fact.votesFalse}</button>
    </div>
    </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// CATEGORIES[CATEGORIES.name == fact.category].color
//console.log(htmlArr);
// const html = htmlArr.join("");
// factsList.insertAdjacentHTML("afterbegin", html);

// Show or hide the share a fact form by editing the html box class
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// console.dir(btn);
/*
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age; // no bracket because one line
  else return `Impossible year. Year needs to be at least ${currentYear}.`;
}


// template variable
const text = "coucou olivier";
const str = `The current fact is "${text}". It is ${calcFactAge(
  2015
)} years old.`; // the ` is backstick with the ~ on the keyboard
console.log(str);

// define an arrow function
const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be at least ${new Date().getFullYear()}.`;
console.log(calcFactAge2(2018));
console.log(calcFactAge2(2025));


let votesInteresting = 23;
let votesMindblowing = 5;
const text = "coucou olivier";

votesInteresting = votesInteresting + 1;
votesInteresting++;
let totalUpvotes = votesInteresting + votesMindblowing;
console.log("UpVotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

let votesInteresting = 20;
let votesMindblowing = 5;

if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting fact!");
} else if (votesInteresting < votesMindblowing) {
  console.log("Mindblowing fact!");
}

// falsy values: 0, '', null, undefined
// truthy values: anything else

if (votesMindblowing) {
  console.log("Mindblowing fact!!!");
} else {
  console.log("Not so special...");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources";
// alert(message);

const text = "coucou olivier";
const upperText = text.toUpperCase();


const fact = ["coucou Olivier 2", 2015, true];
console.log(fact);
console.log(fact[fact.length - 1]);

const [text2, createdIn] = fact;
console.log(fact);

const newFact = [...fact, "society"];
console.log(newFact);

// in an object, we can create a function
const factObj = {
  text: "coucou olivier 3",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `the fact "${this.text}" is from the category "${this.category}"`;
  },
};
console.log(factObj.text);
console.log(factObj["text"]);

// creating multiple variables at the same time, taking the factObj keys
const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());

[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);


const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges.join("-"));

*/
