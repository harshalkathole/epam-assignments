function basicOp(operation, value1, value2) {
   // Addition
   if ('+' == operation) {
       return value1+value2;
   }
   
   // Substraction
   if ('-' == operation) {
       return value1-value2;
   }
   
   // Multiplication
   if ('*' == operation) {
       return value1*value2;
   }
   
   // Division
   if ('/' == operation) {
       return value1/value2;
   }
}