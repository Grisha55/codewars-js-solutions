function scoreboard(whoAteWhat){
  const res = [];

  for (const part of whoAteWhat) {
    res.push({name: part.name, score: (part.chickenwings || 0) * 5 + (part.hamburgers || 0) * 3 + (part.hotdogs || 0) * 2});
  }

  return res.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}
