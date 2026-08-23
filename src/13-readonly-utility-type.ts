interface Book  {
  title:string,
  author:string,
  price:number
}

const book:Readonly<Book>= {
  title:"The Prince",
  author:"Niccolò Machiavelli",
  price:3500
}

console.log(book);

// book.price = 599;
// connot assign to price  because it is a read only property
