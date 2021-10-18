1. Line 9: 
- ```values added:  20```
   
2. Line 13: 
- ```final result:  20```
   
3. Line 9: 
- ```values added:  20```
   
4. There's an error at line 13. It said, "ReferenceError: the result is not defined". This error happens because the variable defined with ```let``` have Block Scope, which means that is the variable declared inside a {} block cannot be accessed outside of the block.
   
5. Line 7 gives an error saying, "TypeError: Assignment to constant variable." Variable define with ```const``` cannot be Redeclared. Thus, it will execute at line 7 so that line 9 will have nothing in the output.
   
6. Since the code executes at line 7, we know that line 13 will have nothing in the output. However, we also know that by running line 13, we shoule receive an error, because Variable define with ```const``` have Block Scope, which means that is the variable declared inside a {} block cannot be accessed outside of the block.