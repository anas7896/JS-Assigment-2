// CHAPTER NO: 5

// Q No: 1

var num = 9, num1 = 2, result = num + num1;

document.write("Addition " + num + " and " + num1 + " is " + result + "." + "<br>");

// Q NO: 2

var num = 9, num1 = 2, result = num - num1;

document.write("Subtraction " + num + " and " + num1 + " is " + result + "." + "<br>");

var num = 9, num1 = 2, result = num * num1;

document.write("Multiplication " + num + " and " + num1 + " is " + result + "." + "<br>");

var num = 9, num1 = 2, result = num / num1;

document.write("Division " + num + " and " + num1 + " is " + result + "." + "<br>");

// Q NO: 3

 var num3;

 document.write("Value after variable declaration is: " + num3 + "<br>");

 num = 5

 document.write("Initial value: " + num + "<br>");

 num++;

 document.write("Value after increment is: " + num + "<br>");

num += 7;

document.write("Value after addition is: " + num + "<br>");

num --;

document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;

document.write("The remainder is: " + remainder + "<br>");

// Q NO: 4

var movieTicket = 600, ticket = 5, result = movieTicket * ticket;

document.write("The Cost to buy " + ticket + " tickets to a movie is " + result + " PKR" + "<br>");

// Q NO: 5

document.write("<h1> Table of 4 </h1>")

var table = 4, table1 = "x", table2 = 1, table3 = "=", table4 = 4;

document.write(table,  " " , table1, " ", table2, " ", table3, " ", table4 * 1, "<br>")
document.write(table,  " " , table1, " ", ++table2, " ", table3, " ", table4 * 2, "<br>")
document.write(table,  " " , table1, " ", ++table2, " ", table3, " ", table4  * 3, "<br>")
document.write(table,  " " , table1, " ", ++table2, " ", table3, " ", table4  * 4, "<br>")
document.write(table,  " " , table1, " ", ++table2, " ", table3, " ", table4  * 5, "<br>")
document.write(table,  " " , table1, " ", ++table2, " ", table3, " ", table4  * 6, "<br>")
document.write(table,  " " , table1, " ", ++table2, " ", table3, " ", table4  * 7, "<br>")
document.write(table,  " " , table1, " ", ++table2, " ", table3, " ", table4  * 8, "<br>")
document.write(table,  " " , table1, " ", ++table2, " ", table3, " ", table4  * 9, "<br>")
document.write(table,  " " , table1, " ", ++table2, " ", table3, " ", table4  * 10, "<br>")

// Q NO: 6

document.write("<h1> Shopping Cart </h1>" + "<br>")

var prise1 = 650, quantityItem1 = 3, prise2 = 100,  quantityItem2 = 7, shipping = 100;

var totalCost = prise1 * quantityItem1 + prise2 * quantityItem2 + shipping

document.write("Prise of item 1 is " + prise1 + "<br>")
document.write("Quantity of item 1 is " + quantityItem1 + "<br>")
document.write("Prise of item 2 is " + prise2 + "<br>")
document.write("Quantity of item 2 is " + quantityItem2 + "<br>")
document.write("Shipping charges " + shipping + "<br>")
document.write("<br>")

document.write("Total Cost of your order is " + totalCost)

// Q NO: 7

document.write("<h1> Marks Sheet </h1>")

var totalMarks = 980, obtainMarks = 804

var percentage = (obtainMarks / totalMarks) * 100;

document.write(percentage + " %" + "<br>")

// Q NO: 8

var add = 5 * 10 / 2;

document.write(add + "<br>")

// Q NO: 9

document.write("<h1> Age Calculator </h1>" + "<br>")

var currentYear = 2016, birthYear = 1992;
var yourAge = currentYear - birthYear;

document.write("Current year: " + currentYear + "<br>" + "Birth year: " + birthYear + "<br>" + "Your Age: " + yourAge + "<br>")

// Q NO: 10

document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>")

var favoriteSnack = "Chocolate Chip", currentAge = 15, maxAge = 65, perDay = 3
var resultSnak = (maxAge - currentAge) * perDay

document.write("You will need " + resultSnak + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);
