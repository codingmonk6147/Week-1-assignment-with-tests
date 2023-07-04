// /*
//   Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
//   and return a list of objects where each object is unique category-wise and has total price spent as its value.
//   Transaction - an object like { itemName, category, price, timestamp }.
//   Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

//   Once you've implemented the logic, test your code by running
//   - `npm run test-expenditure-analysis`

// */

function calculateTotalSpentByCategory(transactions) {

  var uniqTrancations = [];
  var hashMap  = new Map();

  for(var t of transactions){
    if(hashMap.has(t.category)){
      hashMap.set(t.category, hashMap.get(t.category) + t.price);
    }
    else{
      hashMap.set(t.category, t.price);
    }

  }

  var obj = []
  hashMap.forEach (function(value, key) {
    var o = {
      "category":key,
      "totalSpent":value
    }
    obj.push(o);
  })
  return obj;
}

module.exports = calculateTotalSpentByCategory;
