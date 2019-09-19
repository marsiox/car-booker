# Booking API
## Demo NodeJS API with Linked List

This is a NodeJS API created to demonstrate the use of Linked List in managing order of objects.


## The problem
You are given a set of data representing a sequence of bookings on a single car. 
Each booking consists of a start location and an end location. 
Given two adjacent bookings b1 and b2, we say a relocation is required between those bookings if the end location of b1 ≠ the start location of b2.

## Solution
Idecided to use linked list to build a booking object with connected bookings. Linked list is a data structure in wthich objects are arranged in linear order.
Unlike an array, in which the linear order is determined by the array indices. 

### Why Linked List

Sorting will be handled on inserting a booking object to the list in a right place. 
I only have to iterate through the list once to find the matching object and plave the node next to it. 
This means the complexity is just `O(n)`. Later on I will iterate again to build a simple array of integers.

Logic is located in `lib/booking.ts`
## Build instructions
- Requires NodeJS

```
npm i
npm run-script build && npm start
```

You can test this API using POSTMAN. The endpoint is accepting POST request with JSON raw data - type: Application/JSON

### Run tests if you don't want to build and test manually
```
npm test
```
