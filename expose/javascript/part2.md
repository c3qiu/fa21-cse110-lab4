1. At line 12, it printed **3**. According to the code, we know that by inputting [100, 200, 300], we got the length of the price of 3. In the **for** loop, we know that when ```i >= prices.length``` it will break from the loop. And since the increment of i is 1, so that I must be 3 in order to come out from the **for** loop.

2. At line 13, the output is **150**. Since ```finalPrice``` only executed the current value of ```prices[i]``` which is inside of ```discountedPrice```, so we know the last value of ```prices[i]``` is 300. By inserting that value to ```discountedPrice``` we got the output of 150, 
   
3. At line 13, the output is **150**. From the previous question we see that the last value that is saved in ```discountedPrice``` is 150, and then inserting that value to ```finalPrice```, we will get 150 as the result.
   
4. The function should return the array [50, 100, 150]. Array```discounted``` was declared as the function variable. Inside the for loop, we multiplied each element in the array, [100, 200, 300], by the discount and push the rounded discounted price to ```discounted```. Once the for loop ends, it should return the array [50, 100, 150].
   
5. At line 12, the code causes an error said  *ReferenceError: i is not defined*. Because any variable that is defined with ```let``` has Block Scope, so ```i``` cannot be used outside of {} block.
   
6. At line 13, the code causes an error said  *ReferenceError: discountedprice is not defined*. Because any variable that is defined with ```let``` has Block Scope, so I cannot be used outside of {} block.
   
7. At line 14, the code will print out **150**. ```let finalPrice``` was defined as the function variable, but outside of the for loop, so after the for loop ends, we can still call or use it as long as it is within the function. 
   
8. The function should return the array [50, 100, 150]. ```let discounted``` was defined as the function variable, which means ```discounted``` can be used anywhere within the function. We iterated each element in the array by mutiply ```(1 - discount)``` and push the rounded discounted price to ```discounted```. Once the for loop ends, it should return the array **[50, 100, 150]**.
   
9.  At line 11, there is a *ReferenceError: i is not defined*. Because any variable that is defined with ```let``` has Block Scope. Since ```i``` is defined as the first statement in the for loop, so it cannot be used after for loop ends.
    
10. At line 12, it is asking to print the output of variable value, ```length```. In the code, we can see that ```length``` is defined as ```const```. Since any variable defined with ```const``` cannot be redeclared or reassigned, and any variable defined with ```const``` also have Block Scope. So there will be no error when executed this line, and the output will be 3.

11. The function will return the array of  ```discounted``` with no errors. ```discounted``` was defined with ```const``` and did not be redeclared or reassigned and it is used within the function {} block. Thus, the function should return the array **[50, 100, 150]**.

**Data Types** <br/>
12. Given the above Object, write the notation for:
-  Accessing the value of the name property in the student object
   - ```console.log(student.name);```
- Accessing the value of the Grad Year property in the student object
  - ```console.log(student["Grad Year"]);```
- Calling the function for the greeting property in the student object 
  - ```student.greeting();```
- Accessing the name property of the object in the Favorite Teacher property in student
  - ```console.log(student["Favorite Teacher"].name);```
- Access the first index in the array of the courseLoad property of the student object
  - ```console.log(student.courseLoad[0]);```
    
**Basic Operators & Type Conversion**

13. Arithmetic
- '3' + 2 = '32'                    
    > when adding between two different data type, it will priority string before numbers. Thus, integers will map to their exact string representation.
- '3' - 2 = 1
    > when subtracting between two different data type, it is only asking the difference in numbers betwen the data types. Then string for a integer will map to their exact integers representation.
- 3 + null = 3
    > null has the type of null, which corresponding to 0 in integer.
- '3' + null = '3null'
    > since integers map to their exact string representation
- true + 3 = 4 
    > since true maps to 1
- false + null = 0
    > null has the type of null, which corresponding to 0 in integer, and false maps to 0 in integer. 
- '3' + undefined = '3undefined'
    > since integers map to their exact string representation
- '3' - undefined = NaN
    > since string for a integer will map to their exact integers representation in substraction.
    
14. Comparison
- '2' > 1
    > True, string '2' becomes a number 2.
- '2' < '12'
    > False, strings are compared character by character, until they are not equal. The first character of '12' is less than the first character of '2'.
- 2 == '2'
    > True, string '2' becomes a number 2.
- 2 === '2'
    > False, since 2 and '2' are of different types.
- true == 2
    > False, in boolean values, true becomes 1
- true === Boolean(2)
    > True, in JavaScript, a non-empty string is always true. Thus, they are equal value and equal type.
    
15. Explain the difference between the == and === operators.
- ```==``` refers to equal value.
- ```===``` refers to equal value and equal type.

**Loops** 

16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.
> see JS file [here](expose/../part2-question16.js).
17. By calling the function with the following parameters modifyArray([1,2,3], doSomething), we got the result of **[2,4,6]**. A callback is a function passed as an argument to another function. As we passing the array **[1,2,3]** with a callback function doSomething(), we multiply each element in that array by 2. Thus, we will have the result of **[2,4,6]**.
   
**Functions**

18.  The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second. 
> see JS file [here](expose/../part2-question18.js).

19. What is the output of the above code?<br/>
1<br/>
4<br/>
3<br/>
2