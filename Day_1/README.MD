##Day 01 Of learning MERN

###Let's dive into Advanced and widly used concepts of JS that will interest experienced to developers.
##1. Map
##2. Filter
##3. Reduce

##Map() Method - definition 

##Formal Definition
###The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

##Cool definition
###In simpler terms, think of map as a tool for applying a function to each item in a list and getting back a new list containing the results of applying that function to each item.

####Syntax
array.map(function(currentValue, index, arr), thisValue)

~~ ~~
##Filter Method - definition
##Formal definition
###The filter method in JavaScript creates a new array with all elements that pass the test implemented by the provided function.

##Cool definition
###Using the filter method in JavaScript is like sifting through a collection of items in a warehouse and selecting only those items that meet specific criteria. For example, if you're organizing a garage sale and want to display only items priced above $50, you would use the filter method to pick out those items from the inventory.

####Syntax
array.filter(function(currentValue, index, arr), thisValue)

~~ ~~
~~ ~~
##Reduce Method - definition
##Formal definition
###The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

##Cool definition
###Using the reduce method in JavaScript is similar to tallying up expenses in a budget. You start with an initial budget (accumulator) and go through each expense (array element), adding or subtracting its value from the total. At the end, you have a single value representing the total expenses or savings.

####Syntax
array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)
