

function vowel()
{
var enteredAlphabet;
enteredAlphabet = document.getElementById("first").value;
switch(enteredAlphabet)
{
case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
case 'A':
case 'E':
case 'I':
case 'O':
case 'U':
document.write( "vowel") ;
break;
default:
    document.write( "Consonant") 
break;
}
}