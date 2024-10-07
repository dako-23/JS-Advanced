function createSortedList() {

    return {
        add: function (element) {
            // if (typeof (element) !== 'number') {
            //     return;
            // }
            this._sortlist.push(element);
            this._sortlist.sort(this._sort);
            this.size = this._sortlist.length
            return;
        },
        remove: function (index) {
            if (index < 0 || index >= this.size) {
                return
            }
            this._sortlist.splice(index, 1);
            this._sortlist.sort(this._sort);
            this.size = this._sortlist.length
        },
        get: function (index) {
            if (index < 0 || index >= this.size) {
                return
            }
            return this._sortlist[index]
        },
        size: 0,
        _sortlist: [],
        _sort: (a, b) => a - b
    }


}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));