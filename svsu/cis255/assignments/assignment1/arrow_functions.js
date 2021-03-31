//1
/*a*/	const helloWorld = () => "hello world";
/*b*/	const square = (n) => n*n;
/*c*/	const posotive = (n) => n > 0;
/*d*/	const fizzbuzz = (n) => {
		for (var i=1; i <= n; i++) {
		    if (i % 3 * 5 == 0) console.log("FizzBuzz");
		    else if (i % 3 == 0) console.log("Fizz");
		    else if (i % 5 == 0) console.log("Buzz");
		    else console.log(i);
		  }
	};
/*e*/	const fib = (n) => (n == 1 || n == 0) ? 1 : fib(n - 2)+fib(n - 1);

//2

//a
	//returns true if n is a leap year
	const leapyear = (n) => n%400==0 || ((n % 4) == 0 && (n % 100) != 0)
//b

	//returns the square root of a numbers as an array of two numbers, representing complex numbers
	//NOTE: this is a simple function, given more time a library should be built up to handle all complex operations
	const imgSqrt = (n) => (n >= 0) ? [Math.sqrt(n),0] : [0,Math.sqrt(-n)];

	//add two imaginary numbers together
	const addImg = (a,b) => [a[0]+b[0],a[1]+b[1]];
	//convert a real number to an imaginary number
	const img = (n) => [n,0];
	//adds a real number to an imaginary number, syntactic sugar
	const addRealImg = (r,i) => addImg(img(r),i);

	//scale a vector by some constant
	const scaleVector = (n,v) => {
					//copy the array
					let c = [].concat(v);
					//multiply it
					c.forEach((elem,idx,arr) => {
							arr[idx] = elem*n;
						});
					return c;
				};

	//the part of the quadratic formula inside the radical
	const quadRadical = (a,b,c) => imgSqrt(b*b-4*a*c);

	//quadrtatic that handles complex roots
	const quad = (a,b,c) => { 
			let rad = quadRadical(a,b,c);
			let divA = 1/(2*a);
			return [
				scaleVector(divA,addRealImg(-b,rad)),
				//note -b-x = -(b+x) so we can save a scaleVector on rad by writing the equation as (b+rad)/(-2a) the negation gets 
				//moved to the bottom
				//this makes the calculation slightly more effeciant because we avoid a for loop and array copy
				scaleVector(-divA,addRealImg(b,rad))
				];
		};

//c
	//returns the hypotonuse of two inputs
	const hypo = (x,y) => Math.sqrt(x*x+y*y);
//d
	// determines if the elements of an array are posotive
		const isPos = (n) => {	if (Array.isArray(n)) { 
						let tmp = [].concat(n)
						tmp.forEach((item,index,arr) => arr[index]=isPos(item))
						return tmp;
					}
					return n > 0;
	}
//e
	//recursivly sums even numbers in side of a list
	const sumEven = (list,idx=0) => (idx == list.length) ? 0 : ((list[idx] % 2 == 0) ? (list[idx]+sumEven(list,idx+1)) : sumEven(list,idx+1));
					//exit condition 		//is it even		//its even, add it		//not even, move on

//3
/*
	a //returns the sum of two numbers, literaly +
	b //returns the remainder of dividing a number by 3
	c //writes hello world out to the console
	d //returns the string constant "hello", can almost be thought of as literaly that constant
	e //returns the second element in an array
*/
