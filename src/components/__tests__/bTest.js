import b from '../b'

describe('b test', ()=>{
    it('Суммирует 12 и 5',()=>{
        expect(b(12)(5)()).toBe(17);
    });
    it('Суммирует 12 и 5 еще раз',()=>{
        expect(b(12)(5)()).toBe(17);
    });
});