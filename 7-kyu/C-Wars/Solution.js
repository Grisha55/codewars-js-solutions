function initials(n){
  const arr = n.split(' ');
  let surname = arr[arr.length - 1];
  surname = surname[0].toUpperCase() + surname.slice(1);
  let name = '';
  for (let i = 0; i < arr.length - 1; i++) {
    name += arr[i][0].toUpperCase() + '.';
  }
  
  return name + surname;
}