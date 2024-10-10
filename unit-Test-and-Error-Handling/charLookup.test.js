import { expect } from "chai";
import { lookupChar } from "../charLookup.js";

describe('Test lookup char', function () {

    it('To be undefined', () => {
        expect(lookupChar(2, 2)).to.be.undefined
        expect(lookupChar('test', 2.3)).to.be.undefined
    })

    it('Incorrect', () => {
        expect(lookupChar('test', 5)).to.equal('Incorrect index');
        expect(lookupChar('maiko', -1)).to.equal('Incorrect index');
    })

    it('Correct idx', () => {
        expect(lookupChar('test', 0)).to.equal('t');
        expect(lookupChar('bravo', 2)).to.equal('a');

    })
})