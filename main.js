


//ajout tache
function createList() {
    var tache = prompt('ajouter une tache')
    var ul = document.querySelector("ul")
    var li = document.createElement('li')
    li.className = "d-flex justify-content-between list-group-item"
    li.innerHTML = tache + '<button class="delete" type="button"><i class="bi bi-trash3-fill"></i></button>'
    li.contentText = tache
    ul.appendChild(li)
    let effacer = document.getElementsByClassName('delete');
for (let i = 0; i < effacer.length; i++) {
    effacer[i].addEventListener('click', function (e) {
        effacer[i].parentNode.remove();

    })
}


//delete texte


}


