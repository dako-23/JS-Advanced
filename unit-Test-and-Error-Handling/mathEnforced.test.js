import { expect } from "chai";
import { mathEnforcer } from "./mathEnforced.js";

describe('Math Enforcer', function () {

    describe('Add five fnc', function () {

        it('Wrong AddFive', () => {

            expect(mathEnforcer.addFive('test')).to.be.undefined;
            expect(mathEnforcer.addFive([1,2,3,4])).to.be.undefined;
            expect(mathEnforcer.addFive({ name: 'Emo' })).to.be.undefined;

        })

        it('Correct AddFive', () => {

            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.1);

        })

    })

    describe('Subtract ten fnc', function () {

        it('Wrong Subtract', () => {

            expect(mathEnforcer.subtractTen('jeep')).to.be.undefined;
            expect(mathEnforcer.subtractTen(['1,2,3,4'])).to.be.undefined;
            expect(mathEnforcer.subtractTen({ name: 'Emo' })).to.be.undefined;

        })

        it('Correct Subtract', () => {

            expect(mathEnforcer.subtractTen(-20)).to.be.equal(-30);
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.1);

        })
    })

    describe('Sum number fnc', function () {

        it('Wrong Sum', () => {

            expect(mathEnforcer.sum(1, 'a')).to.be.undefined;
            expect(mathEnforcer.sum(['1,2,3,4'], 1)).to.be.undefined;
            expect(mathEnforcer.sum({ name: 'Emo' })).to.be.undefined;

        })

        it('Correct Sum', () => {
            expect(mathEnforcer.sum(1, 2)).to.be.equal(3);
            expect(mathEnforcer.sum(-10, 5)).to.be.equal(-5);
            expect(mathEnforcer.sum(10.2, 12.3)).to.be.closeTo(22.5, 0.1);
        })
    })


})