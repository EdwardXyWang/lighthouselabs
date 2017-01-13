var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(companySalesData, salesTaxRates) {
  // log the company name
companyNames = [];

for (var i = 0; i < companySalesData.length; i++) {
  if (!companyNames.includes(companySalesData[i]['name'])) {
  if (companyNames)
    companyNames.push(companySalesData[i]['name']);
  }
}

// make calculatedResult ready
var calculatedResult = {

};

for (var i = 0; i < companyNames.length; i++) {
  calculatedResult[companyNames[i]] = {
    totalSales: 0,
    totalTaxes: 0
  }
}

// main function
// fix the province then compute the numbers
for (var i = 0; i < companySalesData.length; i++) {
  for (var j = 0; j < Object.getOwnPropertyNames(salesTaxRates).length; j++){
  // which province does it belong
  if (companySalesData[i]['province'] ===
    Object.getOwnPropertyNames(salesTaxRates)[j]) {
    // calculate the sales
    calculatedResult[companySalesData[i]['name']]['totalSales'] +=
      sum(companySalesData[i]['sales']);
    // calculate the tax
    calculatedResult[companySalesData[i]['name']]['totalTaxes'] +=
      (sum(companySalesData[i]['sales']) *
        salesTaxRates[companySalesData[i]['province']]);
  }
}
}

console.log(calculatedResult);
}

// sum function
function sum(array) {
  var sumResult = 0;
  for (var i = 0; i < array.length; i++) {
    sumResult += Number(array[i]);
  }
  return sumResult;
};

calculateSalesTax(companySalesData, salesTaxRates);

// In summary:
// array.includes(item) --> true/false, tell you if there is this item in
// this array
// Object.getOwnPropertyNames(object) --> return you a list of your
// property names
//



