const receivesAFunction = function(callback){
    callback();
}
const returnsANamedFunction = function(){
      return (returnsANamedFunction);
}
const returnsAnAnonymousFunction = function(){
      return function (){
        return "Anonymous function!";
      };
};