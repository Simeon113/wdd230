

  
let specialtydrinksnumber = window.localStorage.getItem('specialtydrink')

// localStorage.setItem('specialtydrink', specialtydrinks)

if (specialtydrinks == null) {
  document.querySelector('#smoothies').innerText = `Start making your own specialty drinks!!`
}
else {
  document.querySelector('#smoothies').innerText = `You have made ${specialtydrinksnumber} specialty drinks with us. Thank you!`
}
