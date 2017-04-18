var integers=[13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var sort= integers.sort(function(a,b){return b-a});var remove= integers.filter(function(lel){return lel<19;});var sum=0;for (var i=0;i<remove.length; i++){var x = remove[i] *1.5-1;console.log(x);sum +=x;}console.log(sum);console.log(sort);console.log(remove);
