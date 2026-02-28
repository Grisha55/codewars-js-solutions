const whosOnline = (friends) => {
  const online = [];
  const offline = [];
  const away = [];
  
  for (const friend of friends) {
    if (friend.status === 'online' && friend.lastActivity <= 10) {
      online.push(friend.username);
    } else if (friend.status === 'online' && friend.lastActivity > 10) {
      away.push(friend.username);
    } else {
      offline.push(friend.username);
    }
  }
  
  const res = {};
  if (online.length > 0) {
    res.online = online;
  }
  if (offline.length > 0) {
    res.offline = offline;
  }
  if (away.length > 0) {
    res.away = away;
  }
  
  return res;
}