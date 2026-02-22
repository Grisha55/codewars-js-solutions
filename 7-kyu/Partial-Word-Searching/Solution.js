function wordSearch(query, seq){
  const res = seq.filter((word) => word.toLowerCase().includes(query.toLowerCase()));
  
  return res.length > 0 ? res : ['Empty'];
}