//var numbers1;
//var numbers2;

function number1()
{

    document.getElementById('txtbox').value += 1
    
    
    
    //document.getElementById('txtbox').innerHTML = "1"
}
function number2()
{	
    document.getElementById('txtbox').value += 2
    
    /*var cnum2 = document.getElementById('numbersInputDiv')
    var num2 = eval(document.createTextNode('2'))	
    cnum2.appendChild(num2)*/
}
function number3()
{	
    document.getElementById('txtbox').value += 3
    
}
function number4()
{	
     document.getElementById('txtbox').value += 4
    
}
function number5()
{	
    document.getElementById('txtbox').value += 5
    
}
function number6()
{
    document.getElementById('txtbox').value += 6
    
}
function number7()
{	
    document.getElementById('txtbox').value += 7
    
}
function number8()
{	
    document.getElementById('txtbox').value += 8
    
}
function number9()
{	
    document.getElementById('txtbox').value += 9

}
function number0()
{	
     document.getElementById('txtbox').value += 0

}
function sumOperator()
{	
    //var numbers1 = document.getElementById('txtbox').value
    
    var operator = document.getElementById('txtbox').value += "+"

    //var numbers2 = document.getElementById('txtbox').value
}
function substractionOperator()
{	
    var operator = document.getElementById('txtbox').value += "-"
}
function divisionOperator()
{	
    var operator = document.getElementById('txtbox').value += "/"
}
function timeOperator()
{	
    var operator = document.getElementById('txtbox').value += "*"	
}
function equalOperator()
{	
    
    //document.getElementById('txtbox').value += "="
    
    var numbers1 = document.getElementById('txtbox').value
    
    //var numbers2 = document.getElementById('txtbox').value.innerHTML = document.getElementById('txtbox').value
    
    if( operator = "+")
    {
        //document.getElementById('txtbox').value = eval(numbers1) + eval(document.getElementById('txtbox').value)
        
        document.getElementById('txtbox').value = (eval(numbers1))
    }	
    if( operator = "-")
    {
        document.getElementById('txtbox').value = (eval(numbers1))
    }
    if( operator = "*")
    {
        document.getElementById('txtbox').value = (eval(numbers1))
    }
    if( operator = "/")
    {
        document.getElementById('txtbox').value = (eval(numbers1))
    }
}


function eraseOperator(){
    document.getElementById('txtbox').value = "";
}

// when client wants to do equal operator with pressing enter in keyboard
/*function enter()
{	
    if(e.code(13))
    {
        equalOperator()
    }
    
    
    //alert(numbers1)
}*/
    
    
    
    //var numbers1 = document.getElementById('txtbox').value 
    
    
    //var result = equalOperator
    //alert(result)
    
    
    
    /*switch(result)
        {
            case"+" : return( eval(numbers) + eval(numbers2))
        }	
        
    var result = document.getElementById('txtbox').value.innerHTML = equalOperator
    document.getElementById("txtbox").innerHTML = equalOperator	*/