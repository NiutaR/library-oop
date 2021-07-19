class Media {
    constructor() {
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

        return (this._ratings.reduce(reducer) / this._ratings.length).toFixed(3);
    }
    addRating(newRatings) {
        return this._ratings.push(newRatings);

    }
}
console.log(reducer)