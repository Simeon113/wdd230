const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('.list')
button.addEventListener('click', function() {
    if (input.value != '') {
        const item = input.value
        input.value = ''
        const item_list = document.createElement('li')
        const delete_button = document.createElement('button')
        delete_button.textContent = '❌'
        item_list.textContent = item 
        item_list.appendChild(delete_button)
        list.appendChild(item_list)
        delete_button.addEventListener('click', () => {list.removeChild(item_list)})
        input.focus()

    } 
})