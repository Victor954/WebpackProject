import  { Main } from './index';

const mainObj = new Main();

test('adds 1 + 2 to equal 3', () => {
    expect(mainObj.getSum(1,2)).toBe(3);
});