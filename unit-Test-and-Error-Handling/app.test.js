import { expect } from 'chai';
import { addNumbers } from './app.js';

describe('Adding numbers', function () {
    it('works with numbers', () => {
        expect(addNumbers(1, 1)).to.equal(2);
    });

    it('doesnt work', () => {
        expect(() => addNumbers('a', 'b').to.throw());

    });
})
