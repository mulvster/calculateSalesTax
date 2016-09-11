var taxRates = {
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

function calculateSalesTax(sales, taxRates) {
var data = {};

for(var i = 0; i < sales.length; i++) {
  var currCompany = sales[i];

  if (!data[currCompany.name]) {
    data[currCompany.name] = {
      totalTax: taxRates[currCompany.province] * sum(currCompany.sales),
      totalSales: sum(currCompany.sales)
    };
  } else {
    console.log(sum(currCompany.sales));
    data[currCompany.name]["totalTax"] += taxRates[currCompany.province] * sum(currCompany.sales);
    data[currCompany.name]["totalSales"] += sum(currCompany.sales);
  }
}
  return data;

}
function sum(arr){
  var total = 0;

  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }

  return total;
}


var results = calculateSalesTax(companySalesData, taxRates);
console.log(results);










