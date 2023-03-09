function x(){
	var i = 1;
	setTimeout(function(){
		console.log(i);
	}, 3000);
	console.log("Namaste JavaScript")
}

x();


function x1(){
	for(var i = 1; i <= 5; i++){
		setTimeout(function(){
			console.log(i);
		}, i*1000);
	}
	console.log("Namaste JavaScript")
}
x1();


function x2(){
	for(let i = 1; i <= 5; i++){
		setTimeout(function(){
			console.log(i);
		}, i*1000);
	}
	console.log("Namaste JavaScript")
}
x2();


function x3(){
	for(var i = 1; i <= 5; i++){
		function close(x){
			setTimeout(function(){
				console.log(x);
			}, x*1000);
		}
		close(i);	
	}
	console.log("Namaste JavaScript")
}
x3();