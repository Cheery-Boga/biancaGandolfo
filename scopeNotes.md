The 'let' keyword allows us to create block scope, which allows us to have private variables that were previously reserved for function scopes. 

rainbow indent is a nice plug-in for VS code. 

the appropiate time you want to use the 'let', is when you want to scope your variable inside a block that's not a function.

- a function has access to its own local, scope variables
- inputs into a function are treated as local, scope variables
- block scope can be created with the let keyword
- a function has access to the variables contained within the same scope that function was created in 
- a function's local scopes variables are not available anywhere outside that function
- a function's local scopes variables are not available anywhere outside that function; regardless, of the context it's called in
