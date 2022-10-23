1. It will print the last value of i that i was incremented to, which is 3. Since the print is still in function scope, it has access.
2. It will print 150 since that was the last value that discountedPrice was assigned to. It is still within function scope, so we are able to access it. 
3. It will print 150 since that is the last value that finalPrice was assigned to. It is within the same scope, so it has access.
4. [50, 100, 150] since it continually appends the new price of the discounted item to the array within the for loop.
5. Error: i isn't defined since i was scoped to only the for loop. It does not exist after that. 
6. Error: discountedPrice isn't defined since it is out of scope.
7. It will print 150 since that was the last value that finalPrice was assigned to. It is still within scope, so we are able to access it.
8. [50, 100, 150] since it continually appends the new price of the discounted item to the array within the for loop. It can return since discounted is still within the same scope.
9. Error: i isn't defined since i was scoped to only the for loop. It does not exist after that. 
10. It wll print 3 since it was assigned a value at the beginning and still within scope.
11. [50, 100, 150] since it continually appends the new price of the discounted item to the array within the for loop. It can append since it is not reassigning discounted.
12. 
	A) student.name
	B) student['Grad Year']
	C) student.greeting()
	D) student['Favorite Teacher'].name
	E) student.courseLoad[0]
13.
	A) '32' since int 2 will be casted into a string for concatenation
	B) 1 since string 3 will be cased into a integer for arithmetic substraction
	C) 3 since null is converted to integer 0
	D) '3null' since null is converted to a string 'null'
	E) 4 since true is converted to an integer 1
	F) 0 since both values are converted to 0 
	G) '3undefined' since undefined is converted to a string
	H) NaN since javascript tries to interpret both arguments as integer, and '3' is casted to 3 and undefined is converted to NaN
14. 
	A) True since '2' is casted into integer 2 
	B) False since '1' is greater alphabetically
	C) True since they are both equal in value, but not type
	D) False since they are not equal in type
	E) False since true is converted to 1 
	F) True since Boolean(2) evaluates to true
15. == checks for equality in values, while === checks for both equality in values and type
17. It will return [2, 4, 6]. A function is passed as an argument, and we are able to pass arguments into that function. Here, we use a loop to access each element in array and feed in each element as an argument of the callback. This effectively iterates through each array and doubles it, returning the new result.
19. 
1
4
3
2
