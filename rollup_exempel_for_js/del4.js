let objAlltJs = {fil: function () {
	'use strict'
	let vOrigin = 66;
	this.MirrorVar = vOrigin;
	console.log(vOrigin + 'miro desde // let vOrigin = this.MirrorVar;');
	console.log("det är filen JS 2");
	},

	vTest: 'det är andra prperty av obj',
	MirrorVar: 0
};
/***********************************/

let objAlternativet ={vMirror: objAlltJs.vOrigin}

export default objAlltJs;
//export default objAlternativet;

