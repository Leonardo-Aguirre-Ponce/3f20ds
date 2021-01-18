var _set = new Set();
var _weakset = new WeakSet();

(function () {
   var a = { x: 1 };
   var b = { y: 2 };  
    
   _set.add(a);
   _weakset.add(b);
})();