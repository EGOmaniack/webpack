let b = (()=>{
    let summ = 0;
    let temp = 0;
    let func = (e)=>{
        if(e){
            summ += e;
            return func;
        }
        temp = summ;
        summ = 0;
        return temp;
        
    };
    return func;
})();

export default b;