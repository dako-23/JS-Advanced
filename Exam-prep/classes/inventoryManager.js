class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity
        this.items = new Map()
        this.outOfStock = new Set()
    }

    addItem(itemName, quantity) {
        this._validateQuantity(quantity)

        if (this.capacity <= this.items.size + this.outOfStock.size) {
            throw new Error('The inventory is already full.')
        }

        this._addItemStock(itemName, quantity)

        return `Added ${quantity} ${itemName}(s) to the inventory.`

    }
    sellItem(itemName, quantity) {
        this._validateQuantity(quantity)

        if (!this.items.has(itemName)) {
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        }
        const existing = this.items.get(itemName)
        // вадим от добавените айтеми заявеното количество за продажба
        if (existing < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock`);
        }

        const newValue = existing - quantity
        this.items.set(itemName, newValue)

        if (newValue == 0) {
            this.items.delete(itemName)
            this.outOfStock.add(itemName);
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`


    }
    restockItem(itemName, quantity) {
        this._validateQuantity(quantity)
        this._addItemStock(itemName, quantity)

        if (this.outOfStock.has(itemName)) {
            this.outOfStock.delete(itemName)
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`

    }

    getInventorySummary() {
        const result = ['Current Inventory:']

        this.items.forEach((key, value) => result.push(`${value}: ${key}`))
        if (this.outOfStock.size > 0) {
            result.push(`Out of Stock: ${[...this.outOfStock.values()].join(', ')}`)
        }

        return result.join('\n')


    }

    _validateQuantity(qty) {
        if (qty <= 0) {
            throw new RangeError('Quantity must be greater than zero.')
        }


    }

    _addItemStock(itemName, quantity) {

        if (!this.items.has(itemName)) {
            this.items.set(itemName, 0);
        }
        // начина за += на количеството, когато има добавяне на повтарящ се продукт в Map. 
        const existing = this.items.get(itemName)
        this.items.set(itemName, existing + quantity)

    }

}




const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());







