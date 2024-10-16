(function solve() {

    Array.prototype.last = function () {
        return [...this].pop();
    }

    Array.prototype.skip = function (n) {
        if (n < 0 || n > this.length - 1) return;
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        if (n < 0 || n > this.length - 1) return;
        return this.slice(0, n)
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, curEl) => acc + curEl, 0);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;

    }
    return

})();

const testArray = [1, 2, 3];


console.log(Array.prototype.hasOwnProperty('last'));

