const CHECK = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true
}
  
function makeNumber (){
    let myStr = String(arguments[0]);
    let result = '';
        for(let i=0;i<myStr.length;i++){
            if (CHECK[myStr[i]]) {
                result += myStr[i];
            }
        }
    return result;
};

function countNumbers (a) {
    
    let number = makeNumber(a);
    let counter = {};
	for(let i=0;i<number.length;i++){
        counter[number[i]] = 0;
    }	for(let i=0;i<number.length;i++){
            counter[number[i]] +=1;
        }
    return counter;
    };
   
countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');