function calcMaxProfit(stockPrices) {
  if(stockPrices.length < 2)
    return 'Not enough stock prices.  Need atleast 2'
  var maxProfit = stockPrices[1] - stockPrices[0]
  var minPrice = stockPrices[0]

  for (var i = 1; i < stockPrices.length; i++) {
    maxProfit = Math.max(maxProfit, stockPrices[i] - minPrice)
    minPrice = Math.min(minPrice, stockPrices[i])
  }

  return maxProfit
}

// var yesterdayPrices = [-2, -5] // -3
// var yesterdayPrices = [2,3,4,6,2,-1,4,-6, 4,3,7,4,10] // 16
var yesterdayPrices = [2] // 16
console.log(calcMaxProfit(yesterdayPrices))

