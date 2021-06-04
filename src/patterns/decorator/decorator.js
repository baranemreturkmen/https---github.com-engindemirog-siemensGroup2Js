export class Book{
    constructor(title, author, price){
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

export class BookService{
    constructor(book){
        this._book = book;
    }

    getBook(){
        return this._book;
    }

    setBook(book){
        this._book = book;
    }

    getDetails(){
        return `${this._book.title} : ${this._book.author}`
    }
}

export function giftWrap(bookService) {
    bookService.getDetailsWhenGiftWrapped = ()=>{
        return `${bookService.getBook().title} : ${bookService.getBook().author} : giftWrapped`
    }
}