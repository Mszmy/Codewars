const flip=(d, a)=>{
   // 如果是R，则递增排序； 如果是L，则递减排序
  if(d == 'L')return a.sort((a,b)=>{return b-a})
  else return a.sort((a,b)=>{return a-b})
}
