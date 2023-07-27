const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "User";
const prompts = [
 
  // ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["jay shree ram"],["hello"],["hey"],["namaste"],["good morning"],["good afternoon"],
  ["how are you", "how is life", "how are things","how was your day"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["what is capital of madhya pradesh"],["capital of madhya pradesh"],['capital of mp'],['cm of mp'],['cm of madhya pradesh'],
  ['tell me about mp'],
  ['formation of mp'],['largest city of mp'],['no of districts in mp'],['total districts in mp'],['no of divisions in mp'],['total divisions in mp'],
  ['governer of mp'],['no of election seats in mp'],['how many rajya sabha seats in mp'],['how many lok sabha seats in mp'],
  ['total area of mp'],
  //dimensions
  ['dimensions of mp'],['length of mp'],['width of mp'],['elevation of mp'],['highest elevation of mp'],['lowest elevation of mp'],['area of mp'],['total area of mp'],
  //language
  ['official language of mp'],['local of mp'],['which language most speaks in mp'],["official script of mp"],['script of mp'],
  //GDP
  ['total gdp of mp'],['rank of mp in indian gdp'],['mp rank in indian gdp'],['per capita of mp'],
  //time zone
  ['time zone of mp'],['iso 3166 code of mp'],['hdi of mp'],['literacy rate of mp'],['sex ratio of mp'],
  //official of mp
  ['mp song'],['song of mp'],['state bird of mp'],['state bird'],['state fish of mp'],['state fish'],['state flower of mp'],['state flower'],
  ['state fruit of mp'],['fruit of mp'],['state mammal of mp'],['mammal of mp'],['state tree of mp'],['tree of mp'],
  //founder
  ['who is founder of mp'],
  ['founder of mp'],
  //population
  ['population of mp'],['population of madhya pradesh'],
  ['total population of mp'],
  ['density on living'],['density per sq km'],['density of mp'],
  ['total population of indore'],
  ['indore total population'],
  //sports
  ['state sport of mp'],['state sports of mp'],['state sport of madhya pradesh'],
  //citys
  ['famous cities of mp'],['famous citys of mp'],
  ['famous citys of madhya pradesh'],['famous cities of madhya pradesh'],
  ['about indore'],
  ['tell me about indore'],
  //names
  ['old name of mp'],['what is old name of mp'],['folk dance of mp'],['what is folk dance of mp'],
  ['i love you'],['ilu'],['love you'],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"]
  ]
 const replies = [
  ["jay shree ram"],["hey"],["heya"],["namaste"],["good morning"],["good afternoon"],
  // ["hello", "heya", "hello", "good morning", "good afternon"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["My partner Jayesh TT"],
  ["I am nameless", "I don't have a name"],

  ["Bhopal"],["Bhopal"],["Bhopal"],['Shivraj Singh Chouhan'],['Shivraj Singh Chouhan'],
  ['Madhya Pradesh a large state in central India, retain landmarks from eras throughout Indian history.Till 1 November 2000 MP is a largest state by area later 16 districts are divided and form new state called Chhattishgarh.'],
  ['26 January 1950'],['Indore'],['there are 52 district'],['there are 52 district'],['There are 10 divisions in MP'],['There are 10 divisions in MP'],
  ['Mangubhai C.Patel'],['230 seats'],['11 Rajya sabha seats'],['29 Lok sabha seats'],
  ['308,252 km sq. or 119,017 sq mi'],
  //dimensions
  ['Lenght - 605km(376 mi) and width - 870km(540mi)'],['Lenght is 605km(376mi)'],['Width is 870km(540mi)'],['Elevation is 400m(1,300ft)'],['Highest elevation of MP is 1352m(4436ft)'],['Lowest elevation of MP is 90m(300ft)'],['3,08,245 sq.km'],['3,08,245 sq.km'],
  //language
  ['Hindi'],['Hindi'],['Hindi'],['Devnagari script'],['Devnagari script'],
  //GDP
  ['11.69 trillion/US$150 billion'],['At 10th rank'],['At 10th rank'],['124,685 rupee (US$1,600)'],
  //time zone
  ['UTC+05:30(IST)'],['ISO code is MP'],['0.606(Medium)'],['Literacy rate of MP is 69.32%'],['Sex ratio of MP is 970F/1000M'],
  //offical  of mp
  ['Mera Madhya Pradesh'],['Mera Madhya Pradesh'],['Indian paradise(flycatcher)'],['Indian paradise(flycatcher)'],['Mahseer'],['Mahseer'],['White lily'],['White lily'],
  ['Mango'],['Mango'],['Barasingha'],['Barasingha'],['Banyan Tree'],['Banyan Tree'],
  //founder 
  ['Further,east,the kingdom of Chedi lie in Bundelkhand.Chandragupta Maurya united northern India c.326-27BCE,establishing the Maurya Empire(327 to 185 BCE),which included all modern-day Madhya Pradesh.'],
  ['Further,east,the kingdom of Chedi lie in Bundelkhand.Chandragupta Maurya united northern India c.326-27BCE,establishing the Maurya Empire(327 to 185 BCE),which included all modern-day Madhya Pradesh.'],
  //population
  ['The population of Madhya Pradesh state is 72,626,809. The density of Madhya Pradesh state is 236 per sq km.'],['The population of Madhya Pradesh state is 72,626,809. The density of Madhya Pradesh state is 236 per sq km.'],
  ['The population of Madhya Pradesh state is 72,626,809. The density of Madhya Pradesh state is 236 per sq km.'],
  [' The density of Madhya Pradesh state is 236 per sq km.'],[' The density of Madhya Pradesh state is 236 per sq km.'],[' The density of Madhya Pradesh state is 236 per sq km.'],
  [' The current estimate population of Indore city in 2023 is 2,707,000 , while Indore metro population is estimated at 2,992,000 .'],
  [' The current estimate population of Indore city in 2023 is 2,707,000 , while Indore metro population is estimated at 2,992,000 .'],
  //sports
  ['Mallakhamba'],['Mallakhamba'],['Mallakhamba'],
  //
  ['Some of the famous cities of madhya pradesh are Indore,Ujjain,Bhopal,Gwalior,Dewas and many more'],['Some of the famous cities of madhya pradesh are Indore,Ujjain,Bhopal,Gwalior,Dewas and many more'],
  ['Some of the famous cities of madhya pradesh are Indore,Ujjain,Bhopal,Gwalior,Dewas and many more'],['Some of the famous cities of madhya pradesh are Indore,Ujjain,Bhopal,Gwalior,Dewas and many more'],
  ['Indore is a vibrant city located in the state of Madhya Pradesh, India. It is the largest city in Madhya Pradesh and serves as its commercial capital. Known for its rich history, cultural heritage, and rapid development, Indore is one of the most populous and economically significant cities in central India.'],
  ['Indore is a vibrant city located in the state of Madhya Pradesh, India. It is the largest city in Madhya Pradesh and serves as its commercial capital. Known for its rich history, cultural heritage, and rapid development, Indore is one of the most populous and economically significant cities in central India.'],
  //names
  ['Old name of MP is Vindhya Pradesh'],['Old name of MP is Vindhya Pradesh'],['Mataki and Jawara'],['Mataki and Jawara'],
  ["I love you too"],['ilu too'],['love you too'],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
 ];

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]
const robot = ["How do you do, fellow human", "I am not a bot"];
msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;
  msgerInput.value = "";
  addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
  output(msgText);
});
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")  
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(robot|bot|robo)/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }
  const delay = input.split(" ").length * 100;
  setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", product);
  }, delay);
}
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}
function addChat(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
function get(selector, root = document) {
  return root.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}