(function () {
	'use strict';

	let objAlltJs = {fil: function () {
		let vOrigin =66;
		this.MirrorVar = vOrigin;
		this.prueba = 1111;
		console.log(vOrigin + 'miro desde // let vOrigin = this.MirrorVar;');
		console.log("det är filen JS 2");
		},

		vTest: 'det är andra prperty av obj',
		//MirrorVar: 40
	};
	//export default objAlternativet;

	//import del3 from './del3.js';

	//console.log(del3.fil);
	objAlltJs.fil();
	//del3.fil();
	//del3.fil();
	console.log(objAlltJs.vTest);
	console.log(objAlltJs.MirrorVar);
	console.log(typeof(objAlltJs.prueba));

	//console.log(del4.MirrorVar);

}());
