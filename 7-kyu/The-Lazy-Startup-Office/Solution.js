function binRota(arr){
  let idx = 0;
  let turn = 'right';
  const res = [];
  
 for (a of arr) {
   if (turn === 'right') {
     res.push(...a);
     turn = 'left';
   } else {
     res.push(...a.reverse());
     turn = 'right';
   }
 }
  
  return res;
}