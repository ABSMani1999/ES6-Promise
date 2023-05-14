var program = new Promise(language);


function language(resolve,reject){
	let proLanguage = confirm("JavaScript is dynamic language ?");
	if(proLanguage == true){
		resolve("JavaScript is");
	}
	else{
		reject("JavaScript is");
	}
}

program.then(dynamic).catch(notDynamic);

function dynamic(dy){
	document.write(dy +" dynamic language");
}

function notDynamic(noDy){
	document.write(noDy +" not dynamic");
}