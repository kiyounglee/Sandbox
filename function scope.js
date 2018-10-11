function aa(par1){
	return (function bb(par2){
		return function cc(par3){
			debugger;
			return par1 * par2 * par3
		}
	})(33)

}

function aa2(par1){
	var par2 = 22;
	debugger;
	return function cc(par3){
		debugger;
		return par1 * par2 * par3
	}
}
