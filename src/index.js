module.exports = function check(str, bracketsConfig) {
    if (str.length %2 ) {
        return false;
      }
    
      const {open, close} = bracketsConfig.reduce((acc, curr) => {
          acc.open.push(curr[0]);
          acc.close.push(curr[1]);
          return acc;
      }, {open:[], close:[]});
    
      const stack =[];
    
      [...str].forEach((el, idx)=>{
        let index = close.findIndex(s=>s===el);
        let openSymbol = open[index];
        let flag = true;
          if (close.includes(el)) {
            if (stack[stack.length-1]===openSymbol){ 
              stack.pop();
              flag = false;
          }
        }
        if (open.includes(el) && flag) {
          stack.push(el);
        }
      });
        
     if (stack.length !== 0){
        return false;
      }
      return true;
}
