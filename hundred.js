function howManyHundreds(number)
{
   var result = (number - (number % 100))/100;
   console.log("The total number of hundreds in "+ number + " is " + result);
   return result;
}

howManyHundreds(239);
