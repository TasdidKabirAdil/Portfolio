const quotesList = [
  "Life isn’t about finding yourself. It’s about creating yourself. — George Bernard Shaw",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "It is not the length of life, but the depth. — Ralph Waldo Emerson",
  "The unexamined life is not worth living. — Socrates",
  "Life is really simple, but we insist on making it complicated. — Confucius",
  "Our lives begin to end the day we become silent about things that matter. — Martin Luther King Jr.",
  "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
  "Don't count the days, make the days count. — Muhammad Ali",
  "Life is what happens when you’re busy making other plans. — John Lennon",
  "You only live once, but if you do it right, once is enough. — Mae West",
  "Turn your wounds into wisdom. — Oprah Winfrey",
  "The purpose of life is not to be happy. It is to be useful. — Ralph Waldo Emerson",
  "Every man dies, not every man really lives. — William Wallace",
  "Sometimes the wrong choices bring us to the right places. — Unknown",
  "The quieter you become, the more you can hear. — Ram Dass",
  "Everything you’ve ever wanted is on the other side of fear. — George Addair",
  "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
  "Difficulties strengthen the mind, as labor does the body. — Seneca",
  "He who has a why to live can bear almost any how. — Friedrich Nietzsche",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
  "Life is too deep for words, so don't try to describe it, just live it. — C.S. Lewis",
  "The only true wisdom is in knowing you know nothing. — Socrates",
  "Don’t be afraid your life will end; be afraid that it will never begin. — Grace Hansen",
  "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",
  "You must be the change you wish to see in the world. — Mahatma Gandhi",
  "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
  "To live without hope is to cease to live. — Fyodor Dostoevsky",
  "The best way out is always through. — Robert Frost",
  "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
  "It’s not what you look at that matters, it’s what you see. — Henry David Thoreau",
  "Act as if what you do makes a difference. It does. — William James",
  "Life shrinks or expands in proportion to one’s courage. — Anaïs Nin",
  "Only in the darkness can you see the stars. — Martin Luther King Jr.",
  "Life is made of ever so many partings welded together. — Charles Dickens",
  "The meaning of life is to give life meaning. — Viktor E. Frankl",
  "Every next level of your life will demand a different you. — Leonardo DiCaprio",
  "Don’t search for the meaning of life. Simply be present for the people you love. — Maxime Lagacé",
  "If you want to go fast, go alone. If you want to go far, go together. — African Proverb",
  "Don’t trade your authenticity for approval. — Unknown",
  "Life is not a problem to be solved, but a reality to be experienced. — Søren Kierkegaard",
  "The more you know, the more you realize you don't know. — Aristotle",
  "All we have to decide is what to do with the time that is given us. — J.R.R. Tolkien",
  "It is better to be hated for what you are than to be loved for what you are not. — André Gide",
  "A wise man can learn more from a foolish question than a fool can learn from a wise answer. — Bruce Lee",
  "Don’t let the noise of others’ opinions drown out your own inner voice. — Steve Jobs",
  "Be yourself; everyone else is already taken. — Oscar Wilde",
  "The soul becomes dyed with the color of its thoughts. — Marcus Aurelius"
];


const quoteEl = document.getElementById("quote");

let previousIndex = -1;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomQuoteIndex() {
  let index;
  do {
    index = Math.floor(Math.random() * quotesList.length);
  } while (index === previousIndex);
  previousIndex = index;
  return index;
}

async function typeText(text) {
  for (let char of text) {
    quoteEl.innerHTML += char;
    await sleep(50);
  }
}

async function deleteText() {
  while (quoteEl.innerHTML.length > 0) {
    quoteEl.innerHTML = quoteEl.innerHTML.slice(0, -1);
    await sleep(30);
  }
}

async function typeWriterLoop() {
  while (true) {
    const quote = quotesList[getRandomQuoteIndex()];
    await typeText(quote);
    await sleep(2000);
    await deleteText();
    await sleep(1000);
  }
}

typeWriterLoop();