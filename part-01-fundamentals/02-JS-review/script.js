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
const books = getBooks();
//books;
//const book = getBook(2);

//const title = book.title;
//const author = book.author;
//title;
//author;
//console.log(author, title);

//const book = getBook(2);
//const { title, author } = book;
//title;
//author;
//console.log(author, title);

//const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//book;
//const primaryGenre = genres[0];
//const secondaryGenre = genres[1];
//console.log(primaryGenre, secondaryGenre);

// 19.Rest/Spread Operator
const book = getBook(3);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

//console.log(author, title, genres);

//const primaryGenre = genres[0];
//const secondaryGenre = genres[1];

// 1)
//const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
//console.log(primaryGenre, secondaryGenre, otherGenres);

// 2)
//const [primaryGenre, ...otherGenres] = genres;
//console.log(primaryGenre, otherGenres);

// 3) ERROR
// const [primaryGenre, ...otherGenres, secondaryGenre ] = genres;

// WRONG
//const newGenres = [genres, "epic fantasy"];

// USING SPREAD
//const newGenres = [...genres, "epic fantasy"];
//newGenres;

// WRONG UPDATE
//const updatedBook = { book, moviePublicationDate: "2001-12-19" };

// Update one field
// const updatedBook = { book, moviePublicationDate: "2001-12-19" };

// Update more than one field
//const updatedBook = { book, moviePublicationDate: "2001-12-19", pages: 1210 };

// WRONG - Update more than one field
// const updatedBook = {
//   pages: 1210,
//   ...book,
//   moviePublicationDate: "2001-12-19",
// };

// Update more than one field
// const updatedBook = {
//   ...book,
//   // Adding a new property
//   moviePublicationDate: "2001-12-19",
//   // Overriding an existing porperty
//   pages: 1210,
// };

// updatedBook;

// 20. Template Literals
// const summary_singlequotes = '';
// const summary_doublequotes = "";
// const summary = `a book`;

// Examples
// const summary = `${title} is a book`;
// const summary = `${title} is a book ${2 + 4}`;
// const summary = `${title}, is a book`;
// const summary = `${title}, a ${pages}-page long book, was written by ${author} and pubished in ${publicationDate}`;

// const summary = `${title}, a ${pages}-page long book, was written by ${author} and pubished in ${
//   publicationDate.split("-")[0]
// }`;
// summary;

// 21. Ternaries Instead of if/else Statements
// const pagesRange = pages > 1000 ? "over a thusand" : "less than 1000";
// pagesRange;
// console.log(`The book has ${pagesRange} pages`);

// const summary = `${title}, a ${pages}-page long book, was written by ${author} and pubished in ${
//   publicationDate.split("-")[0]
// }. The book has ${hasMovieAdaptation ? "" : "not "}been adapted as a movie`;
// summary;

// 22. Arrow Functions
// function getYear(str) {
//   return str.split("-")[0];
// }
// console.log(getYear(publicationDate));

// Examples
// (str) => str.split("-")[0];
// (str, a, b) => str.split("-")[0];

// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// const getYear = (str) => {
//   // whatever
//   return str.split("-")[0];
// };

// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));
// const summary_singlequotes = "";
// const summary_doublequotes = "";
// const summary = `${title}, a ${pages}-page long book, was written by ${author} and pubished in ${getYear(
//   publicationDate
// )}. The book has ${hasMovieAdaptation ? "" : "not "}been adapted as a movie`;

// 23. Short-Circuiting And Logical Operators: &&, ||, ??

// Examples
// console.log(true && "Some string");
// console.log(false && "Some string");
// console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, "", null, undefined
// console.log("Jonas" && "Some string");
// console.log(0 && "Some string");
// console.log(true || "Some string");
// console.log(false || "Some string");

// undefined
//console.log(book.translations.spanish);
// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
// spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// Nullish Coalescing Operator
// It will only return the second value when the first value is null or undefined,
// but not when it is zero or an empty string.
// console.log(book.reviews.librarything.reviewsCount);
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// // 24. Optional Chaining
// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything.reviewsCount;
//   return goodreads + librarything;
// }

// console.log(getTotalReviewCount(book));

// Using getBook(3) -> Cannot read properties of undefined (reading 'reviewsCount')
// and to fix it up!
//const librarything = book.reviews.librarything.reviewsCount;

// using nullish coalescing operator
// const librarything = book.reviews.librarything?.reviewsCount ?? 0;

// const goodreads = book.reviews?.goodreads?.reviewsCount;
// const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
// goodreads;
// librarything;

// // 25. The Array map Method
// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// console.log(titles);

// // WRONG
// // const essentialData = books.map((book) => {
// //   x: 23;
// // });

// // USE THIS
// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });
// console.log(essentialData);

// const essentialData2 = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));
// console.log(essentialData2);

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

// const essentialData3 = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//     reviewsCount: getTotalReviewCount(book),
//   };
// });
// console.log(essentialData3);

// 26. The Array filter Method
// const longBooks = books.filter((book) => book.pages > 500);
// longBooks;

// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooksWithMovie;

// const adventureBooks = books
//   .filter((books) => books.genres.includes("adventure"))
//   .map((book) => book.title);
// adventureBooks;

// 27. The Array reduce Method
// const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// pagesAllBooks;

// // 28. The Array sort Method
// const x = [3, 7, 1, 9, 6];

// // Using original array
// const sortedX = x.sort((a, b) => a - b);
// sortedX;

// // Using copy of the original array
// const arr = [3, 7, 1, 9, 6];
// const sortedArr = arr.slice().sort((a, b) => a - b);
// sortedArr;
// arr;

// Sort by the number of pages
// Descendant
// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// // Ascendant
// //const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
// sortedByPages;

// // 29. Working With Immutable Arrays
// // 1) Add book object to array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and th Chamber of Secrets",
//   author: "J. K. Rowling",
// };

// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// const booksAfterAdd2 = [newBook, ...books];
// booksAfterAdd2;

// // 2) Delete book object from array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// // 3) Update book object in the array but returns an empty object
// // const booksAfterUpdate = booksAfterDelete.map((book) =>
// //   book.id === 1 ? {} : book
// // );

// // Update book object in the array
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1 } : book
// );

// booksAfterUpdate;

// 30. Asynchronous JavaScript: Promises
// fetch("https://jsonplaceholder.typicode.com/todos/");
// console.log(fetch("https://jsonplaceholder.typicode.com/todos/"));

// // Using fetch().then()
// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log("Jonas");

// 31. Asynchronous JavaScript: Async/Await
// Using async functions and await
// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   const data = await res.json();
//   console.log(data);
//   return data;
// }
// const todos = getTodos();
// console.log(todos);
// console.log("Jonas");
