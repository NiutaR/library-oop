class Media {
    constructor(title, isCheckedOut, rating) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(checked) {
        return checked = isCheckedOut;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        //console.log(reducer);
        return (this._ratings.reduce(reducer) / this._ratings.length).toFixed(3);
    }
    addRating(newRatings) {
        return this._ratings.push(newRatings);

    }
}
class Book extends Media {
    constructor(author, title, pages, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings)
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor()
}