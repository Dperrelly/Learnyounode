var sum = 0;
var args = process.argv.slice(2);
for(i = 0; i < args.length; i++){
	sum += Number(args[i]);
}
console.log(sum);