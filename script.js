// Capturando os elementos em HTML
const listContainer = document.querySelector('[data-lists]')
//Verificar se capturou a lista fantasma
// console.log(listContainer)
// Abaixo para capturar o formulário
const newListForm = document.querySelector('[data-new-list-form]')
// Para capturar o que foi digitado no input
const newListInput = document.querySelector('[data-new-list-input]')

// Array criando a lista dos itens que forem sendo acrescentados.

let lists = []

//Função para ligar o botão de insert
newListForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function createList(name){
    return {id: Date.now().toString(), name: name }
}

function render(){
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function clearElement(element){
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}