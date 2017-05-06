import summ from './summ';

describe ('summ', function (){
    it ("вернет сумму чисел",function(){
        expect(summ(1, 2)).toBe(3);
    });
});