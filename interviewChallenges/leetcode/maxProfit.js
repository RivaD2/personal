/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock 
and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


How can I solve this?
- I first have to buy before I can sell
 - I can look for the minimum of all the numbers
   Ex: 8, 3, 0, 1
   Min = 0
   Number to the right is 1, so buy price is 0, profit is 1
- What if next num in arr is a 5?
  Max profit would be if I bought at 0 and sold at 5.


_ I can create a min variable called minPurchasePrice and set it to
  Infinity. Why? If I set the number so high, when I get to first actual price, it is 
  definitely lower.
- Create a variable called highestProfit and set it it 0;
- Iterate using for of loop
- Is price of current stock lower than minPurchasePrice? 
  - If it is, update the min buy price with current stock (element)
- If I hit a number greater than the minPurchasePrice, then I can sell
  the stock and set highestProfit to that element
  - If a hit a element that is higher than current profit, update highestProfit
- The highest profit is the difference between the current price and minPurchase price 
- I want to BUY at the lowest price and SELL at the highest price
*/

const maxProfit = pricesArr => {
  let minPurchasePrice = Infinity;
  let highestProfit = 0;

  for(let price of pricesArr){
    if(price < minPurchasePrice){
      minPurchasePrice = price;
    } else if(price - minPurchasePrice > highestProfit) {
      highestProfit = price - minPurchasePrice;
    }
  }
  return highestProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))