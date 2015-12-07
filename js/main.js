var box;
var box_state = 'closed';

function init(){
	box = document.getElementById('box-container-main');

	box.addEventListener('click', changeBox, false);
}

function changeBox(){
	if(box_state == 'closed'){
		box_state = 'open';

		document.getElementById('box-top-main').className = 'open';
		document.getElementById('shine').className = 'open';
		document.getElementById('overlay').className = 'open';
	}else{
		box_state = 'closed';

		document.getElementById('box-top-main').className = '';
		document.getElementById('shine').className = '';
		document.getElementById('overlay').className = '';
	}
}