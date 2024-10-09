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
        calc.add(1)
        expect(calc.get()).to.equal(1);
    })

    it('negative num', () => {
        calc.subtract(1)
        expect(calc.get()).to.equal(-1);
    })
})