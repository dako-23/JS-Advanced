import { expect } from 'chai';
import { isOddOrEven } from '../evenOrOdd.js';
import { describe, it } from 'mocha';

describe('Check undefined', function () {
    it('Number', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    })
    it('Array', () => {
        expect(isOddOrEven(['string'])).to.be.undefined
    })
    it('Object', () => {
        expect(isOddOrEven({ name: 'george' })).to.be.undefined
    })

    describe('Happy path Even', function () {
        it('Is even', () => {
            expect(isOddOrEven('11')).to.equal('even')
        })
        it('Is even', () => {
            expect(isOddOrEven('test')).to.equal('even')
        })
    })

    describe('Happy path Odd', function () {
        it('Is odd', () => {
            expect(isOddOrEven('1')).to.equal('odd')
        })
        it('Is odd', () => {
            expect(isOddOrEven('tes')).to.equal('odd')
        })
    })
})
