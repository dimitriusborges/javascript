const formNovoItem = document.querySelector("#novoItem");
const listaItems = document.querySelector('#lista');
const itemsLocalStorage = JSON.parse(localStorage.getItem("items")) || [];


function buttonDelete(){
    const botao = document.createElement("button");
    botao.innerText = "X";

    //arrow functions do not carry the "this" element. We must use a function if
    //we want to use it
    botao.onclick = function (){
        removeItem(this.parentNode);

    }

    return botao;
}

function removeItem(elementToDelete){
    const idToRemove = elementToDelete.querySelector('[data-id]').dataset.id;
    elementToDelete.remove();
    removeFromLocalStorage(idToRemove);
}

function addItem(nome, quantidade, id){
    //create element returns a complete object HTMLElement

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const qtdItem = document.createElement('strong');
    qtdItem.innerHTML = quantidade;
    //creats the dataset if it does not exist
    qtdItem.dataset.id = id;

    novoItem.appendChild(qtdItem);

    //attention to the +=, with only =, you will erase anything added before
    //even with 'appendChild'
    novoItem.innerHTML += nome;
    novoItem.appendChild(buttonDelete())


    listaItems.appendChild(novoItem);


    return {
        "nome" : nome,
        "quantidade" : quantidade,
        "id": id
    };

}

function updateItem(elementSaved, newQtd){
    //it is possible to look for a data value with a specific value
    const toUpdate = listaItems.querySelector("[data-id='" + elementSaved.id + "']");
    toUpdate.innerHTML = newQtd;
    elementSaved.quantidade = newQtd;
    return elementSaved;

}

function checkItemExists(nome){
    return itemsLocalStorage.find(element => element.nome.toLowerCase() === nome.toLowerCase());
}

function saveOnLocalStorage(itemStorage){

    itemsLocalStorage.push(itemStorage);
    localStorage.setItem("items", JSON.stringify(itemsLocalStorage));
}

function updateLocalStorage(updatedElement){

    const idxToUpdate = itemsLocalStorage.findIndex(el => el.id === updatedElement.id);

    itemsLocalStorage[idxToUpdate] = updatedElement;
    //localStorage just stores strings, so we are overwriting here
    localStorage.setItem("items", JSON.stringify(itemsLocalStorage));

}

function removeFromLocalStorage(idToRemove){
    itemsLocalStorage.splice(itemsLocalStorage.findIndex(el => el.id === idToRemove), 1)
    localStorage.setItem("items", JSON.stringify(itemsLocalStorage));
}

//loading saved items
itemsLocalStorage.forEach((elemenent) => {
    addItem(elemenent.nome, elemenent.quantidade, elemenent.id)
});

formNovoItem.onsubmit = (evt) =>{
    evt.preventDefault();

    //all elements from the form
    const elements = evt.target.elements;

    const nome = elements['nome'];
    const qtd = elements['quantidade'];

    const elementSaved = checkItemExists(nome.value);

    if(elementSaved){
        const updatedItem = updateItem(elementSaved, qtd.value);
        updateLocalStorage(updatedItem);
    }
    else{

        const newId = itemsLocalStorage.length > 0 ?
            parseInt(itemsLocalStorage[itemsLocalStorage.length -1].id) + 1:
            0;

        const newItem = addItem(nome.value, qtd.value, newId.toString());

        saveOnLocalStorage(newItem);

    }

    nome.value = "";
    qtd.value = "";

}

