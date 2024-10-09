import { expect } from "chai";
import { createCalculator } from "./addSub.js"
import { beforeEach } from "mocha";

describe('Add/Subtract', function () {
    let calc;

    beforeEach(() => {
        calc = createCalculator();
    })

    it('Has correct value', () => {
        expect(calc.get()).to.equal(0)
    })

    it('can add number', () => {
        expect(calc.get(1)).to.equal(1);
    })

    it('negative num', () => {
        expect(calc.get(1)).to.equal(-1);
    })

})