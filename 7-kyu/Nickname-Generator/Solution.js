function nicknameGenerator(name){
  if (name.length < 4) return 'Error: Name too short'
  
  const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'y', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  if (consonant.includes(name[2])) {
    return name.slice(0, 3);
  } else {
    return name.slice(0, 4);
  }
}