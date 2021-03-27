const numero = document.querySelector('.numero')
const obtener = document.querySelector('.obtener')
const indicador = document.querySelector('.indicador')
const urlMovil = 'whatsapp://send?phone=+'
const urlWeb ='https://web.whatsapp.com/send?phone='
const pais = document.querySelector('.pais')

let prefijo = ''
let indice = pais.options[pais.selectedIndex]

console.log(pais.length)

document.addEventListener('DOMContentLoaded',()=>{
    cargarPais()
})
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

cargarPais = async()=>{
    await fetch('https://restcountries.eu/rest/v2/region/Americas')
    .then(response => response.json())
    .then(res =>{
            res.forEach(item => {
               
                if(item.name=='Chile' || item.name=='Peru'){
                pais.innerHTML +="<option value="+item.name+">"+item.name+"</option>"
            }
        });
    })
}



pais.addEventListener('change',async()=>{
    let indice = pais.options[pais.selectedIndex]
    await fetch('https://restcountries.eu/rest/v2/region/Americas')
    .then(response => response.json())
    .then(res =>{
            res.forEach(item => {
                if(indice.value == item.name){
                prefijo = item.callingCodes[0] 
                console.log(prefijo)
          }
        });
    })
})

const alertas = (icono,mensaje) =>{
  Swal.fire({
    position: 'top-end',
    icon: icono,
    title: mensaje,
    showConfirmButton: false,
    timer: 1000
  })
  
}

obtener.addEventListener('click',(e)=>{
    e.preventDefault()
    if(!numero.value.length>0){
       alertas('warning','Ingresa numero')
        return
    }if(numero.value.length <9){
        alertas('warning','Tú pais son 9 digitos')
        return
    }if(!pais.value){
        alertas('warning','Seleciona Pais')
          pais.focus()
          return
    }
    else {
    Swal.fire({
        title: 'Buscando Numero en WhatsApp',
        html: 'Queda <b></b> milisegundos',
        timer: 1500,
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
                window.open(urlMovil+prefijo+numero.value);
            } else {
                window.open(urlWeb+prefijo+numero.value);
            }
        }
        resetearFormulario()
      }) 		
    } 

})


numero.onkeyup = ()=>{
     maxlength = numero.getAttribute('maxlength')
     console.log(maxlength)
     indicador.innerText = maxlength - numero.value.length
}

const resetearFormulario = ()=>{
    numero.value = ''
    indicador.innerText = 9  
}
