// Sample book data array containing multiple book objects
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// 18. Destructuring Objects and Arrays

// Retrieve all books from data
const books = getBooks();

// Retrieve a specific book (e.g., book with ID 2)
const book = getBook(2);

// Destructuring to extract specific properties from the book object
const { title, author } = book;

// Access and log the extracted properties
console.log(title);
console.log(author);

// 19. Rest/Spread Operator

// Retrieve a specific book (e.g., book with ID 3)
const book = getBook(3);

// Destructuring to extract multiple properties from the book object
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// Log author, title, and genres of the book
console.log(author, title, genres);

// Using array destructuring to extract primary and other genres
// Option 1: Primary and secondary genre + rest of the genres
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// Option 2: Primary genre + rest of the genres
const [primaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, otherGenres);

// Update genres array with a new genre using spread operator
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

// 20. Template Literals

// Creating a summary string using template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;
console.log(summary);

// 21. Ternaries Instead of if/else Statements

// Using a ternary operator to determine pages range
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
console.log(`The book has ${pagesRange} pages`);

// Including adaptation status in the summary using ternary operator
const summaryWithAdaptation = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not "}been adapted as a movie`;
console.log(summaryWithAdaptation);

// 22. Arrow Functions

// Arrow function to extract the year from publicationDate
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// 23. Short-Circuiting And Logical Operators: &&, ||, ??

// Using logical operators && and ||
console.log(hasMovieAdaptation && "This book has a movie");

// Nullish Coalescing Operator
// Safely accessing potentially undefined properties
const count = book.reviews.librarything?.reviewsCount ?? "no data";
console.log(count);

// 24. Optional Chaining

// Function to calculate total review count using optional chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

// 25. The Array map Method

// Using map to extract an array of titles from books
const titles = books.map((book) => book.title);
console.log(titles);

// Creating essentialData array with title, author, and reviewsCount
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData);

// 26. The Array filter Method

// Filtering books to find those with more than 500 pages
const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);

// Filtering long books that also have movie adaptations
const longBooksWithMovie = books.filter(
  (book) => book.pages > 500 && book.hasMovieAdaptation
);
console.log(longBooksWithMovie);

// 27. The Array reduce Method

// Using reduce to calculate total pages of all books
const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log(totalPages);

// 28. The Array sort Method

// Sorting books by pages in descending order
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

// 29. Working With Immutable Arrays

// Adding a new book object to the array without mutating original array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// Removing a book object from the array without mutating original array
const booksAfterDelete = books.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// Updating a book object in the array without mutating original array
const booksAfterUpdate = books.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
console.log(booksAfterUpdate);

// 30. Asynchronous JavaScript: Promises

// Using fetch().then() to fetch todos from an API
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching todos:", error));

// 31. Asynchronous JavaScript: Async/Await

// Using async/await to fetch todos from an API
async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

getTodos();
