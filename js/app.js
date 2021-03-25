const numero = document.querySelector('.numero')

const obtener = document.querySelector('.obtener')

let ulr = 'whatsapp://send?phone=+51'

obtener.addEventListener('click',(e)=>{
    e.preventDefault()
    window.open(ulr+numero.value)
    
})



// function isMobile() {
// 	if (sessionStorage.desktop) return false;
// 	else if (localStorage.mobile) return true;
// 	var mobile = [
// 		'iphone',
// 		'ipad',
// 		'android',
// 		'blackberry',
// 		'nokia',
// 		'opera mini',
// 		'windows mobile',
// 		'windows phone',
// 		'iemobile'
// 	];
// 	for (var i in mobile)
// 		if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
// 			return true;
// 	return false;
// }

// const formulario = document.querySelector('#reserva');
// const buttonSubmit = document.querySelector('#submit');
// const urlDesktop = 'https://web.whatsapp.com/';
// const urlMobile = 'whatsapp://';
// const telefono = '51993238940';

// formulario.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
// 	buttonSubmit.disabled = true;
// 	setTimeout(() => {
// 		let nombre = document.querySelector('#nombre').value;
// 		let apellido = document.querySelector('#apellido').value;
// 		let fecha = document.querySelector('#fecha').value;
// 		var habitacion=document.getElementById("habitacion").value;

// 		// let email = document.querySelector('#email').value;
// 		let mensaje =
// 			'send?phone=' +
// 			telefono +
// 			'&text=Reservar Habitacion :%0ANombre : ' +
// 			nombre + ' ' + apellido +
// 			'%0AFecha : ' +
// 			fecha +
// 			'%0AHabitación :%0A' +
// 			habitacion +
// 			'';
// 		if (isMobile()) {
// 			window.open(urlMobile + mensaje, '_blank');
// 		} else {
// 			window.open(urlDesktop + mensaje, '_blank');
// 		}
// 		buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp';
// 		buttonSubmit.disabled = false;
// 	}, 500);
// });
