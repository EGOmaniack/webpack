import summ from '../summ';

describe ('summ', function (){
    it ("вернет сумму чисел 1 & 2",function(){
        expect(summ(1, 2)).toBe(3);
    });
    it ("вернет сумму чисел 3 & 2.2",function(){
        expect(summ(3, '2.2')).toBe(5.2);
    });
});