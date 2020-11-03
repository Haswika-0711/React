function *fib(){
	var a=0
	var b=1
	var c
	while(true){
		yield a;
		c=a+b;
		a=b;
		b=c;

	}
}

var gen=fib();

for(var i=0;i<5;i++){
	console.log(gen.next().value);
}

function *fib(){
    [a,b]=[0,1]
    while(true){
        yield a;
        [a,b]=[b,a+b]
    }
}
var gen=fib();
for(var i=0;i<5;i++){
    console.log(gen.next().value);
}















// class Foo{
// 	*[Symbol.iterator](){
// 		yield 1;
// 		yield 2;
// 	}
// }

// class Another{
// 	*[Symbol.iterator](){
// 		yield 'a';
// 		yield 'b';
// 	}
// }
// console.log(Array.from(new Foo))
// console.log(Array.from(new Another))









// function *anotherGenerator(i){
// 	yield i+1;
// 	yield i+2
// 	yield i+3

// }


// function *myGen(i){
// 	yield i
// 	yield *anotherGenerator(i)
// 	yield i+10
// }

// var gen=myGen(10)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
//console.log(gen.next().value)



// function *idMaker(){
// 	var index=1011;
// 	while(true)
// 		yield index++;
// }

// var gen=idMaker()
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)



// function *generatorMessage(){
// 	yield 1;
// 	yield 2;
// 	yield 3+10
// 	console.log("END")

// }

// const gen=generatorMessage()
// console.log(gen.next().value)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


// function *generateForLoop(num){
// 	for(let i=0;i<num;i++){
// 		yield console.log(i)
// 	}
// }


// const genLoop=generateForLoop(10)
// genLoop.next()
// genLoop.next()
// genLoop.next()


// function generateForLoop(num){
// 	for(let i=0;i<num;i++){
// 		console.log(i)
// 	}
// }

// generateForLoop(10)