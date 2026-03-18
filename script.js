//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "Fight, you die.",
  "Freeze, you die.",
  "Fawn, you die.",
  "Flight, you die.",
  "There's no way out.",
  "No one can save you.",
];

const buttonRetry = document.getElementById("button-network");

// Function to handle the button click and update the text
function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}

//end of network error function

//function dropdown menu (do not edit this first part)
function addText(content) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = content;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFun() {
  var x = document.getElementById("subject").value;
  if (x === "monday") {
    addText("make bed, get back in it.")
  } else if (x === "tuesday") {
    addText("go to the shops, buy milk, fix the car, finish essay, text friend back, go for a run");
  } else if (x === "wednesday") {
    addText("wake up, paint the house, don’t panic");
  } else if (x === "thursday") {
    addText("call mum, do everything you were meant to do on tuesday");
  } else if (x === "friday") {
    addText("go to the pharmacy, read a book, reply to jury duty callout, pay bills and rent, vacuum, meal prep for weekend");
  } else if (x === "saturday") {
    addText("walk the dog, go to the doctor, smile more, listen to a podcast, shower, sleep, have a beer because it’s saturday")
  } else if (x === "sunday") {
    addText("sleep.")} 
}

//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "wolf is on the prowl",
  "i am the big bad wolf",
  "working best alone",
  "nighttime is his day",
  "i am unafraid",
  "the monster, the moon",
  "hear that distant howl?",
  "something is coming",
  "better start running",
  "he is on the hunt",
  "watch your back my love"

];
const sevenSyllables = [
  "he is looking for a way out",
  "he is unafraid of you", 
  "make sure you don't fall asleep",
  "isolation is freedom",
  "cannot runaway, or tame",
  "looking desperately to feed",
  "at night things are scary",
  "the dawn of day can't save you"

];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "am i going to survive this?",

  "bad wolf why bad?",
  "big bad wolf found where?",

  "can i outrun a monster?",
  "can i outrun a monster in heels?",
  "car battery broken how do i fix?",

  "deletion of phone data upon death?",

  "emergency contact how to find?",

  "frightening things to say to a wolf?",

  "greatest escape stories?",

  "how to stop self from bleeding out?",
  "HELP!!",

  "i'm going to die, aren't i?", 

  "resurrection spell"
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "you're too late";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "wolves, your friends, night-crawlers, the undead, children, you, soldiers, men, animals, children, small particles".split(
      ","
    ),
  verbs =
    "search, flee, destroy, journey through, ravage, fear, speak of, run towards, eat, destroy, smile at, beg for, run from, scream for, journey to find, hate, strive to discover, will never find".split(
      ","
    ),
  objects =
    "the darkness, the distant lands, safe spaces, eerie caves, large and looming mountains, blood, them, me, us, you, brave soldiers, forgiveness, redemption, the moon, deserted forests at night, bedtime stories, a safe place, ritualistic caves".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
  setTimeout(processPoem, 1800);
}
// Start the process
processPoem();