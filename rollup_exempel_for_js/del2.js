

let objAlltJs = {fil: function () {
		/* body... */

	'use strict'
	let vOrigin =66;
	this.MirrorVar = vOrigin;
	this.prueba = 1111;
	console.log(vOrigin + 'miro desde // let vOrigin = this.MirrorVar;');
	console.log("det är filen JS 2");
	},

	vTest: 'det är andra prperty av obj',
	//MirrorVar: 40
};
/***********************************/

let objAlternativet ={vMirror: objAlltJs.vOrigin}

export default objAlltJs;
//export default objAlternativet;

