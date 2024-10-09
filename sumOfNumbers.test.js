import { expect } from 'chai';
import { sum } from './sumOfNumbers.js';
import { describe } from 'mocha';



describe('Sum Numbers', function () {

    describe('Happy path', function () {
        it('works with numbers', () => {
            expect(sum([1, 1])).to.equal(2);
        });

        it('works with more numbers', () => {
            expect(sum([1, 1, 1])).to.equal(3);
        });
    });

    describe('Edge Cases', function () {
        it('return 0 for empty arr', () => {
            expect(sum([])).to.equal(0);
        });
    });

    describe('Validation', function () {
        it('This is string', () => {
            expect(sum('aaa')).to.be.NaN;
        });
    });

    describe('Test overload', function () {
        it('It works with many numbers', () => {
            expect(sum([10, 20, 30, 40])).to.equal(100);
        });

        it('Sums negative numbers', () => {
            expect(sum([10, 20, 30, 40])).to.equal(-100);
        });

    });





})
