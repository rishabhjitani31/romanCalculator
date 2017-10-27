	//function to add two numbers of the input text
	function add()
	{
		//Will store the roman array of first input text
		var romanvalue = document.getElementById("value1").value.split('');
		
		//Will store the roman array of second input text
		var romanvalue2 = document.getElementById("value2").value.split('');
		
		//Will call the romanconversion function which will convertroman value to integer and then  perform the arithmetic operation
		var numeralvalue = romanconversion(romanvalue) + romanconversion(romanvalue2);
		
		//Will convert the obtained integer value  into the roman number
		document.getElementById("value3").value = romanGenerator(numeralvalue); 
	}
	
	//function to subtract two numbers of the input text
	function subtract()
	{
		//Will store the roman array of first input text
		var romanvalue = document.getElementById("value1").value.split('');
		
		//Will store the roman array of second input text
		var romanvalue2 = document.getElementById("value2").value.split('');
		
		//Will call the romanconversion function which will convertroman value to integer and then  perform the arithmetic operation
		var numeralvalue = romanconversion(romanvalue) - romanconversion(romanvalue2);
		
		//Will convert the obtained integer value  into the roman number
		document.getElementById("value3").value = romanGenerator(numeralvalue); 
	}

	//function to multiply two numbers of the input text
	function multiply()
	{
		//Will store the roman array of first input text
		var romanvalue = document.getElementById("value1").value.split('');
		
		//Will store the roman array of second input text
		var romanvalue2 = document.getElementById("value2").value.split('');
		
		//Will call the romanconversion function which will convertroman value to integer and then  perform the arithmetic operation
		var numeralvalue = romanconversion(romanvalue) * romanconversion(romanvalue2);
		
		//Will convert the obtained integer value  into the roman number
		document.getElementById("value3").value = romanGenerator(numeralvalue);   
	}

	//function to divide two numbers of the input text
	function divide()
	{
		//Will store the roman array of first input text
		var romanvalue = document.getElementById("value1").value.split('');
		
		//Will store the roman array of second input text
		var romanvalue2 = document.getElementById("value2").value.split('');
		
		//Will call the romanconversion function which will convertroman value to integer and then  perform the arithmetic operation
		var numeralvalue = romanconversion(romanvalue) / romanconversion(romanvalue2);
		
		//Will convert the obtained integer value  into the roman number
		document.getElementById("value3").value = romanGenerator(numeralvalue);
	}
	
	//wiill convert the roman number into the integer value romannumber is the list of roman characters
	function romanconversion(romannumber)
	{
		//Equivalent integer value is pushed in these array
		var romanarray = [];
		
		//first number of the romanarray
		var firstnumber = 0;
		
		//second number of the roman array 
		var secondnumber =0;
		
		//total obtained from the integer roman array which will be the output of the function
		var total =0;
		
		//parsing of character roman array to create integer roman array
		romannumber.forEach((item) =>
		{
			switch (item) 
			{
				case 'I':
					romanarray.push(1);
					break;
				case 'V':
					romanarray.push(5);
					break;
				case 'X':
					romanarray.push(10);
					break;
				case 'L':
					romanarray.push(50);
					break;
				case 'C':
					romanarray.push(100);
					break;
				case 'D':
					romanarray.push(500);
					break;
				case 'M':
					romanarray.push(1000);
					break;
				case 'i':
					romanarray.push(1);
					break;
				case 'v':
					romanarray.push(5);
					break;
				case 'x':
					romanarray.push(10);
					break;
				case 'l':
					romanarray.push(50);
					break;
				case 'c':
					romanarray.push(100);
					break;
				case 'd':
					romanarray.push(500);
					break;
				case 'm':
					romanarray.push(1000);
					break;
				default:
			}
		})
		
		//if the size is of length 1 then that element is directly returned
		if (romanarray.length == 1)
		{
			total = romanarray[0];
			return total;
		}
		
		//first element of the romanarray
		var firstnumber = romanarray.shift();
		
		//size of the roman array
		var size = romanarray.length;
		
		//looping to create the equivalent integer number 
		for (var i = 0; i < size+1; i++) 
		{
			secondnumber = romanarray.shift();
			
			//if first number is greater than second number
			if ((firstnumber >= secondnumber) || secondnumber == undefined)
			{
				total += firstnumber;
				firstnumber = secondnumber;
			}
			
			//if second number is greater than first number
			else 
			{
				total += (secondnumber - firstnumber);
				if ((i + 2) == total && romanarray.length == 1)
				{
					firstnumber = romanarray.shift();
					total += firstnumber;
				}
				if ((i + 2) < total) 
				{
					firstnumber = romanarray.shift();
				}
				i++;
			}
		}
		
		//total is returned
		return (total);
		
	  }
	  
	  //function to generate roman number from the equivalent integer value
	  function romanGenerator(numeralvalue)
	  {
		  var romanvalues = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
		  var romanText=''
		  for ( var i in romanvalues )
		  {
			while ( numeralvalue >= romanvalues[i] ) {
			  romanText += i;
			  numeralvalue -= romanvalues[i];
			}
		  }
		  return romanText;
	  }