const str = 'the quick brown fox jumed over the lazy dog'

for(var i = 0; i < strSplit.length; i++){
   if(strSplit[i].length > longestWord){
 longestWord = strSplit[i].length;
    }
 }
   Here strSplit.length = 9
    For each iteration: i = ?   i < strSplit.length?   i++  if(strSplit[i].length > longestWord)?   longestWord = strSplit[i].length
    1st iteration:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
    2nd iteration:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5
    3rd iteration:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5
    4th iteration:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5
    5th iteration:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6
    6th iteration:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6
    7th iteration:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
    8th iteration:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6
    9th iteration:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6
    10th iteration:       9             no
    End of the FOR Loop*/
