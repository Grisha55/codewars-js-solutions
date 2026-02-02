function none(arr, fun){
  if (arr.length === 0) return true;
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) return false;
  }
  return true;
}