const groceries = ['eggs','milk','bread','potato','butter']

const needItem = (item)=>{
     for(let i=0; i<groceries.length; i++){
          if (groceries[i]===item)
               console.log(`found ${item}`);
     }
//O(n)

     for(let i=0; i<groceries.length; i++){
          if(groceries[i]===item)
               console.log(`found ${item}`);
     }
//O(n)
}
needItem('bread')

//n+n = 2n -> O(2n) drop the constant thats why we called this O(n)