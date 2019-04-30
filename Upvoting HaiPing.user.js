// ==UserScript==
// @name        Upvoting HaiPing
// @namespace   sdark
// @description Upvoting HaiPing
// @include   http*://arkservers.net/vote/172.107.170.199:27016*

// @version   0.1
// @grant     none
// @require   http://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==


/*
you need to be logged in to up vote a server
set the voting URL as a home page in your broswer
and everytime you will open your broswer the upvoting will be done
*/

console.log('starting');

var upvote_button = document.getElementsByClassName('btn btn-success');

upvote_button[0].click();

console.log('1st button;');

document.getElementsByClassName('btn btn-success')[0].click();

console.log('2nd button;');

console.log('script finished');

