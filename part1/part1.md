# Part 1a
> 1. Line 9 prints: `values added: 20`
> 2. Line 13 prints: `final result: 20`
> 3. Line 9 prints: `values added: 20`
> 4. Line 13 does not print. There is a  `Reference error`, result was defined using let so it is out of the scope compared to using var.
> 5. Line 9 does not print, there is an error because result is a `const` variable and cannot be motified.
> 6. Line 13 throws a `Reference Error` because the variable result is out of scope
# Part 1b
> 1. Line 12 prints: `3` i is visible outside of the for loop because it was declared using i, since we are passing an array of size 3, our for loop iteration will end at 3. 
> 2. Line 13 prints: `150` because the last value saved is going to be prices[2] which is 300, and 300 * .5 = 150. Since it is declared with var we have access outside of the scope.
> 3. Line 14 also prints: `150` because the last discounted price saved was 150. 150 * 100 / 100 = 150 * 1 = 150. Because we are using var it has access outside of the loop.
> 4. The function `` returns an array`` with updated values than the original. We passed [100,200,300] into the array and multiplied each element by .5 giving us [50,100,150] to return.
> 5. The fuction causes a `reference error` because we are trying to call `i` out of scope. `i` was declared using let so we cannot access it outside of the for loop.
> 6. The function causes a `reference error` because discountedPrice is not declared in the scope. Inside the for loop it is declared with the let keyword so once the loop terminates the value is gone.
> 7. Line 14 prints `150`. finalPrice was declared in an appropiate spot, before the loop. So, when we run the function the value is not lost outside of the scope function. The last value to be updated by finalPrice is 150 * 100/100 = 150.
> 8. The function will ``return an array`` of the ``updated prices`` with the discount applied, in this case it will return: `[50,100,150]`.
> 9. The function causes a `reference error` because i was declared using the let keyword, we cannot access it outside of the loop.
> 10. Line 12 prints `3` because length was declared as const outside of the for loop. Since it was declared in an appropiate spot we are able to call it after the loop, (inside as well).
> 11. The function ``returns an array` that updates all the prices in the passed in array to a new discounted version. After multipying each element by .5 we return: `[50,100,300]`
> 12. 
 - A. student.name
 - B. student['Grad Year']
 - C. student.greeting()
 - D. student['Favorite Teacher'].name
 - E. student.courseLoad[0]
> 13. 
 - A. Result: `'32'` because the integer will map to its exact string representation and then is concatenated with '3'
 - B. Result: `1` because '3' will get mapped to its integer value, 3, and then we subtract 2 from 3 to get 1
 - C. Result: `3` because since the null value will get mapped to 0, we will have 3 + 0 which is = to 0.
 - D. Result: `'3null'` because in this case null is being mapped to its stringvalue and then concatenated onto the string '3'
 - E. Result: `4` because true gets mapped to the #1 and we add the number 3 to it.
 - F. Result: `0` because null and false both map to 0, and 0+0 = 0
 - G. Result: `'3undefined` because undefined gets map to a string, `undefined` and is then concatened with the string `3`
 - H. Result: `undefined` because we cannot do arithmetic operations because undefined will map to NaN (not a number).
> 14.
 - A. Result: `True` because when comparing '2' gets mapped to its integer value and 2 is greater than 1
 - B. Result: `False` because lexographically `2` comes before `12`
 - C. Result: `True` because '2' gets mapped to is integer value and 2 is equal to 2
 - D. Result: `False` because the number 2 and string '2' are different types and === means they are STRICTLY equal
 - E. Result: `False` because true gets mapped to 1, and 1 is not qual to 2
 - F. Result: `True` because both sides are the same type of boolean abd Boolean(2) is a true value, so comparing will be result in a true value.
> 15. `==` is used for comparing two variables ignoring the data type, whereas `===` is comparing two variables but also checking that the data types are the same, without doing any conversion
> 16. NOT IN THIS FILE
> 17. the function takes an array and a callback, in this case we are passing [1,2,3] and doSomething into modifyArray. We are iterating through all the elements in the array and using the `doSomething` function as our callback to multiply every element in the array by 2. After the code is executed our new modifed array would be: `[2,4,6].
> 18. NOT IN THIS FILE
> 19. `Output: 1 4 3 2`