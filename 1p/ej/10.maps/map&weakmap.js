let map = new Map(), objKey = {name: 'tutorialspoint'};   

   map.set(3, ['c']);      
   map.set(objKey, 3);
   map.set(['add', 'mapping'], 'd');          

   console.log(map.has(2));
   console.log(map.has('first'));
   console.log(map.get('first'));
   console.log(map.get(objKey));
   console.log(map.get('empty'));
   console.log(map.size);
   map.clear();
   console.log(map.size);

let weakMap = new WeakMap(), obj4 = {d: 4}, obj5 = {e: 5};

   weakMap.set(obj4, 'fourth');
   weakMap.set(obj5, 'fifth');
   weakMap.set(function(){}, 7);

   console.log(weakMap.has(obj4));
   console.log(weakMap.get(obj4));
   console.log(weakMap.delete(obj4));
   weakMap.clear();