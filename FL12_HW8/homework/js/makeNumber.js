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
  
makeNumber('erer384jjjfd123'); 
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');