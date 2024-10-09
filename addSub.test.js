import { expect } from "chai";
import { createCalculator } from "'./addSub.js'"
import { beforeEach } from "mocha";

discribe('Add/Subtract', function () {
    let calc

    beforeEach(() => {
        calc = createCalculator
    })

    it('Has correct value', () => {
        expect(calc.get()).to.equal(0)
    })
})