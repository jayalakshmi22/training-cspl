// functions to be intercepted
var FuncToIntercept_1 = function() {
    return 'FuncToIntercept_1  executed';
};
 
var FuncToIntercept_2 = function() {
    return 'FuncToIntercept_2  executed';
};
 
//Callers of functions to be intercepted
var CallerFunc_1 = function() {
    return 'executing CallerFunc_1' + ' => ' + FuncToIntercept_1();
};
 
var CallerFunc_2 = function () {
    return 'executing CallerFunc_2' + ' => ' + FuncToIntercept_2();
};
 
 
 
//Set initialization function
var SetInitFunc = function () {
    console.log('Set Initialized');
};
 
//function' interceptor
var FuncInterceptor = function (func) { 
    return function () { // anonimous function as a substitution for 'func'
        // execute 'func' in the same context in which substitution is executed
        var result = func.apply(this, arguments); 
        SetInitFunc(); // execute our code;
        return result; // return result of 'func' execution;
    }
};
 
//Interception Test
var InterceptionTest = function () {
 
    // Imitates code execution on servers where our 'plug in' file is missing 
    console.log('!!! Execute calls to target functions before their interception !!!');
    console.log('----------------------------------------');
    console.log(CallerFunc_1());
    console.log(CallerFunc_2());
 
    console.log('----------------------------------------');
    console.log("!!! Discovering AND Intercepting targets !!!");
 
    // ======= imitates limits  of our 'plug in' file deployed on selected servers ================
 
    // ........ here code for SET of new complex capabilities to be initialized...........
 
    if (FuncToIntercept_1) { //- Discover presence of first target functions in outer scope
        FuncToIntercept_1 = FuncInterceptor(FuncToIntercept_1); //-Intercept by assigning substitution 
    }                                                           //in place of first target
    if (FuncToIntercept_2) { //- Discover presence of second target functions in outer scope
        FuncToIntercept_2 = FuncInterceptor(FuncToIntercept_2); //-Intercept by assigning substitution 
    }                                                           //in place of second target
 
    // ======== imitates limits  of our 'plug in' file deployed on selected servers ================
 
    // Imitates code execution on servers where our 'plug in' file is deployed and loaded on document ready 
    console.log('----------------------------------------');
    console.log('!!! Excute calls to target functions after their interception !!!');
    console.log('----------------------------------------');
    console.log(CallerFunc_1()); // execute caller 1
    console.log(CallerFunc_2()); // execute caller 2
};