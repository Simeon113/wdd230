

  
let specialtydrinksnumber = window.localStorage.getItem('specialtydrink')



if (specialtydrinksnumber == 'null') {
  document.querySelector('#smoothies').innerText = `Start making your own specialty drinks!!`
}
if (specialtydrinksnumber != 'null') {
  document.querySelector('#smoothies').innerText = `You have made ${specialtydrinksnumber} specialty drinks with us. Thank you!`
}
