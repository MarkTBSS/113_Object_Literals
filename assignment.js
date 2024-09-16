"use strict";

// Define the bookData array
const bookData = [
    ['title', 'Computer Networking: A Top-Down Approach'],
    ['author', ['James F. Kurose', 'Keith W. Ross']],
    ['publisher', 'Addison Wesley'],
];

//9.1
const newBook = {
    [bookData[0][0]]: bookData[0][1],
    [bookData[1][0]]: bookData[1][1],
    [bookData[2][0]]: bookData[2][1],
};

// Define the pages variable
const pages = 880;

//8.2
const newBook2 = {
    title: "The C Programming Language",
    author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
    pages,
};
