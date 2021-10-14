const quoteEl = document.querySelector('.quotes');
const authorEl = document.querySelector('.author');
fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
.then(data => {
return data.json();
})
.then(post => {
console.log(post[0].author);
console.log(post[0].quote);
const quote = post[0].quote
const author = post[0].author
console.log(quote);

quoteEl.innerText = quote;
authorEl.innerText = `- ${author}`;

});