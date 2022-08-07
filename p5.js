

units = 300
bill = 0
if(units<=50){
  bill  = units*0.5
}
else if(units <=150){
  bill = 50*0.5 + (units-50)*0.75
}
else if(units <= 250){
  bill = 50*0.5 + 100*0.75 + (units-150)*1.2
}
else if((units > 250 ) && (  bill <= 300 )){
  bill = 50*0.5 + 100*0.75 + 150*1.2 + (units-250) * 1.5
}



if((bill>=250) && (bill <= 300)){
  bill = bill + bill * 0.2
}

console.log(bill)
