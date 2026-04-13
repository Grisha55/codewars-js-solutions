function reverseAndMirror(s1, s2) {
    const invert = str => [...str].map(c => 
        c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
    ).join('');
    
    const rev = str => [...str].reverse().join('');
    
    const p2 = invert(rev(s2));
    const p1 = invert(rev(s1));
    
    return p2 + '@@@' + p1 + rev(p1);
}