const numero = document.querySelector('.numero')
 


const obtener = document.querySelector('.obtener')

const urlMovil = 'whatsapp://send?phone=+51'
const urlWeb ='https://web.whatsapp.com/send?phone=51';
// https://web.whatsapp.com/send?phone=51993238940&text=Reservar%20Habitacion%20:%0ANombre%20:%20ss%20sss%0AFecha%20:%2023/03/2021%0AHabitaci%C3%B3n%20:%0AStandard%20Superior
const celular = ()=>{
    if (sessionStorage.desktop) return false;
	else if (localStorage.mobile) return true;
	var mobile = [
		'iphone',
		'ipad',
		'android',
		'blackberry',
		'nokia',
		'opera mini',
		'windows mobile',
		'windows phone',
		'iemobile'
	];
	for (var i in mobile)
		if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
			return true;
	return false;

}

obtener.addEventListener('click',(e)=>{
    e.preventDefault()
    if(!numero.value.length>0){
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Debe ingresar un numero valido',
            showConfirmButton: false,
            timer: 1000
          })
    }else{
    Swal.fire({
        title: 'Buscando Numero en WhatsApp',
        html: 'Queda <b></b> milisegundos',
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            if (celular()) {
                window.open(urlMovil+numero.value);
            } else {
                window.open(urlWeb+numero.value);
            }
        }
      })
   
        		
    }
    
})



