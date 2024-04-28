# Day-3 of Learning MERN
##  Call Method
## Definition

### The call method is used to invoke a function with a specified this value and arguments provided individually.

## Real-life Example: Restaurant Management System

### Imagine you're developing a restaurant management system where you have a Chef object representing the chef of the restaurant. The Chef object has a method cook which prepares a dish. Additionally, you have a Waiter object representing the waiter who takes orders and serves food to customers.

## Using call method:
### In this scenario, let's say the Waiter wants to request the Chef to cook a dish directly, without creating a separate instance of the Chef. The Waiter can achieve this by using the call method to invoke the cook method of the Chef object:

## Syntax 
### functionName.call(thisValue, arg1, arg2, ...); You can pass as mush as arguments


