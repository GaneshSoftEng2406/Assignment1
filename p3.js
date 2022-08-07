console.clear();
function operation(){
    let x , y, res, ch

ch = document.getElementById("num").value
    x =  document.getElementById("num1").value
   y =   document.getElementById("num2").value
    
    

    switch (ch) {
        
     

      case "-":
      res = x - y
      console.log( parseInt(res))
      break

      case "+":
      res= parseInt(x) + parseInt(y)

      console.log(res)
      break
        
      case "*":
      res = x * y
 console.log( parseInt(res))
      break

      case "/":
      res = x / y
     console.log( parseInt(res))
      break

      case "%":
      res = x % y;
     console.log( parseInt(res))
      break

      default:
      console.log("Invalid Choice:")
    }
 
}