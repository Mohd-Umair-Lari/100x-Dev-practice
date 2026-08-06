function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};
  for(let i=0;i<transactions.length;i++){
    const transaction = transactions[i];
    if(categoryTotals[transaction.category]){
      categoryTotals[transaction.category] += transaction.price;
    } else {
      categoryTotals[transaction.category] = transaction.price;
    }
  }
  return categoryTotals;
}

module.exports = calculateTotalSpentByCategory;
console.log(calculateTotalSpentByCategory([
  {
    id: 1, 
    timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: 'Transport',
    itemName: 'Bus Ticket',
  }
]));