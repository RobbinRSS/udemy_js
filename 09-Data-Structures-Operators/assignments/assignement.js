const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

////////// Destructing arrays ////////////
// 1
const [firstBook, secondBook] = books;

// 2
const [, , thirdBook] = books;

// 3
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];
const [[, rating], [, ratingsCount]] = ratings;

// 4
const ratingStars = [63405, 1808];
const [oneStarRating, twoStarRating, threeStarRating = 0] = ratingStars;
//////////////////////////////////////////

//////////// destructuring objects //////////////////

// 2.1
const { title, author, ISBN } = books[0];

// 2.2
const { keywords: tags } = books[0];

// 2.3
const { language, programmingLanguage = "unknown" } = books[6];

// 2.4
let bookTitle = "unknown";
let bookAuthor = "unkown"(
  ({ title: bookTitle, author: bookAuthor } = books[0])
);

// 2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

// 2.6
printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick",
  year: "2011",
});

printBookInfo = function ({ title, author, year = "year unknown" }) {
  console.log(`${title} by ${author}, ${year}`);
};

//////////// The spread operator ////////////

// 3.1
const bookAuthors = [...books[0].author, ...books[1].author];

// 3.2
const spellWord = function (word) {
  console.log(...word);
};
spellWord("Javascript");

////// rest pattern and parameters /////

// 4.1
const [mainKeyword, ...rest] = books[0].keywords;

// 4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// 4.3
const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book ${title} has ${authors.length}`);
};

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");

/////////////// Short circuiting (&& and ||) ////////////////

// 5.1
const hasExamplesInJava = function (book) {
  return book.programmingLanguage === "java" || "no data available"; // returns true // || is used for true
};
hasExamplesInJava(books[0]);

// 5.2
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent && console.log(`${books[i].title} has online content`); // && is used for false
}

/////////// The Nullish Coalescing operator(??) ///////////

// 6.1
for (i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`${books[i].title} provides no data about its online content`);
}

/////////// Logical assignements operators ///////////////

// 7.1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

// 7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}

///////// looping arrays: the for-of loop ////////////

// 8.1
let pageSum = 0;

for (let book of books) {
  pageSum += book.pages;
}

// 8.2
const allAuthors = [];

for (const book of books) {
  if (typeof book.author === "string") {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}

// 8.3
for (const [i, authors] of allAuthors.entries()) {
  console.log(`${i + 1} ${authors}`);
}

///////// enhanced object literals ////////////

// 9.1
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

// 9.2
const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};

// optional chaining

// 10.1
const getFirstKeyword = function (book) {
  return book.keywords?.[0];
};

getFirstKeyword(books[0]);

// looping objects: object keys values and entries

// 11.1
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}

// 11.2
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}

// 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);

// 11.4
console.log(entries);
console.log(entries2);

// sets

// 12.1
const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}

// 12.2
const uniqueKeywords = new set(allKeywords);

// 12.3
uniqueKeywords.add("coding");
uniqueKeywords.add("science");

// 12.4
uniqueKeywords.delete("business");

// 12.5
const uniqueKeywordsArr = [...uniqueKeywords];

// 12.6
uniqueKeywords.clear();

// Maps: fundementals

// 13.1
const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);

// 13.2
bookMap.set("pages", 464);

// 13.3
console.log(`${bookMap.get("title")} by ${bookMap.get("author")}`);

// 13.4
console.log(bookMap.size);

// 13.5
if (bookMap.has("author")) console.log("The author of the book is known");

// maps iteration

// 14.1
const firstBookMap = new Map(Object.entries([books[0]]));

// 14.2
for (const [key, value] of firstBookMap) {
  if (typeof value === "number") console.log(key);
}

// working with strings part 1

// 15.1
console.log(
  books[0].ISBN["6"],
  books[0].ISBN["4"],
  books[0].ISBN["9"],
  books[0].ISBN["8"]
);

// 15.2 and 15.3
const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";
console.log(quote.indexOf("chess"));
console.log(quote.slice(quote.lastIndexOf(" ") + 1));

// 15.4
const isContributor = function (author) {
  return author.lastIndexOf("(Contributor)") !== -1;
};
// contributor is -1 if present in the string (!==)returns true
isContributor("Julie Sussman (Contributor)");

// working with string part 2

// 16.1
// function normalizeAuthorName(author) {
//   author = author.trim();
//   const firstName = author.slice(0, author.indexOf(" "));

//   let lastName = "";
//   if (author.indexOf(" ") === author.lastIndexOf(" ")) {
//     // checks if there is only 1 space if the first space and last space are the same this code will be used (so no (Contributor))
//     lastName = author.slice(author.indexOf(" ") + 1, author.length); // sliced alles weg tot aan het einde van de author.length
//   } else {
//     lastName = author.slice(author.indexOf(" ") + 1, author.lastIndexOf(" ")); // hij gaat het woord tussen de 1e spatie en de laatste spatie weghalen (lastName) / + 1 zorgt er gewoon voor dat de positie van de achternaam op de goeie plek gaat staan nadat de spatie weg is
//   }

//   const capitalizedFirstName =
//     firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//   const capitalizedLastName =
//     lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

//   return capitalizedFirstName + " " + capitalizedLastName;
// }

// normalizeAuthorName("  JuliE sussMan (Contributor)");

// 16.2
const newBookTitle = books[1].title.replace("Programs", "Software");

// 16.3
const logBookTheme = function (title) {
  if (title.startsWith("Computer")) {
    console.log("This book is computers");
  } else if (title.includes("Algorithms") && title.includes("structures")) {
    console.log("This book is about algorithms and data structures");
  } else if (
    title.endsWith("system") ||
    (title.endsWith("systems") && !title.includes("operating"))
  ) {
    console.log(
      "This book is about some systems, but definitely not about operating systems"
    );
  }
};

// 16.1 redo
const normalizeAuthorName = function (author) {
  author = author.trim();
  firstName = author.slice(0, author.indexOf(" "));

  // kijk hoeveel spaties er in de text zitten
  let lastName = "";
  if (author.indexOf(" ") === author.lastIndexOf(" ")) {
    lastName = author.slice(author.indexOf(" ") + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf(" ") + 1, author.lastIndexOf(" "));
  }

  // de return
  const capitalizedFirstName =
    firstName[0].toUpperCase() + author.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName[0].toUpperCase() + author.slice(1).toLowerCase();

  return capitalizedFirstName + " " + capitalizedLastName;
};
normalizeAuthorName("  JuliE sussMan (Contributor)");

// extra
const capitalizeNames = function (names) {
  const name = names.split(" ");
  const namesUpper = [];
  for (const n of name) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeNames("robbin schrijver");
capitalizeNames("lenny van bouwwaarden");

// working with strings part 3

// 17.1
const logBookCategories = function (str) {
  const strList = str.split(";");

  for (let string of strList) {
    console.log(string);
  }
};

const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";
logBookCategories(bookCategories);

// 17.2
const getKeywordsAsString = function (books) {
  const keywords = [];

  for (const book of books) {
    keywords.push(...book.keywords);
  }
  const uniqueKeywords = [...new Set(keywords)];

  return uniqueKeywords.join(";");
};
getKeywordsAsString(books);

// 17.3
const logBookChapters = function (chapters) {
  for (const [chapter, page] of chapters) {
    console.log(chapter.padEnd(20, "_") + " " + page);
  }
};

const bookChapters = [
  ["The Basics", 14],
  ["Sorting", 254],
  ["Searching", 372],
  ["Graphs", 526],
  ["Strings", 706],
];
logBookChapters(bookChapters);
