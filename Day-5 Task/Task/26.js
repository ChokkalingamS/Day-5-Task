function words (w1,w2)
{
    let s=w1.split("");
    let p=w2.split("");
    if(s.length==p.length)
    {
        return "true";
    }
    return "false"
}
console.log(words("GUVI","GEEK"));


