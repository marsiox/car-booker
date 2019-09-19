# Booking API
## Demo NodeJS API with Linked List

This is a NodeJS API created to demonstrate the use of Linked List in managing order of objects.


## The problem
You are given a set of data representing a sequence of bookings on a single car. 
Each booking consists of a start location and an end location. 
Given two adjacent bookings b1 and b2, we say a relocation is required between those bookings if the end location of b1 ≠ the start location of b2.

## Solution
I decided to use linked list to build a list of booking objects referenced in sequence. Linked list is a data structure in which objects are arranged in linear order. Unlike an array, in which the linear order is determined by the array indices.

### Why Linked List

This is fundamental data structure. Sorting will be handled by inserting a booking object to the list in a right place. So no actual sorting is happening. This will only iterate through the list once to find the matching object and place the node next to it (before or after). There are four situations in which algorithm will decide where to place the node:

* new node is a first one
* new node start = some other node end
* new node end = some other node start
* no match and therefore place the node at the end

This means the complexity is just `O(n)`. Later on it will iterate again to build a simple array of integers.

Logic is located in `lib/booking.ts`
## Build instructions
* requires NodeJS (12 in my case)
* used Typestript

```
npm i
npm run-script build && npm start
```

## Running the API

### Postman
Endpoint `http://localhost:8888/` is accepting POST request on port `8888` with JSON raw data - header:  `application/json`
  
### Curl
```
curl -X POST -H "Content-Type: application/json" -d '[{ "id": 1, "start": 23, "end": 42 },{ "id": 2, "start": 77, "end": 45 },{ "id": 3, "start": 42, "end": 77 }]' http://localhost:8888/
```

### Run tests if you don't want to build and test manually
```
npm test
```
