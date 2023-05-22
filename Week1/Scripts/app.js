// IIFE   immediately inoked function expression 
//aka Anonymous self-executing function

(function(){

    function Start()
    {
        console.log("app started...");
    }

    window.addEventListener("load",Start);

})();