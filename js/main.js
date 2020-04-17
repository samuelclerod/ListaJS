var list = new DoublyLinkedList();

$().ready(function () {
    $('#insert').click(insertElement)
    $('#insert_at').click(insertElementAt)
    $('#remove').click(removeElement)
    $('#remove_at').click(removeElementAt)
})

function showData() {
    let text = `<div class="ui label" style="margin-left: 5px">
                    ${list.toString('</div><div class="ui label" style="margin-left: 5px">')}
                </div>`
    let out = $('#output');
    out.empty()
    out.append(text)
}
function insertElement() {
    let val = prompt('digite um valor a ser inserido:')
    list.append(val)
    showData();
}
function insertElementAt() {
    try {
        let val = parseInt(prompt('digite um valor a ser inserido:'))
        let pos = parseInt(prompt('digite uma posição a inserir:'))
        list.insert(pos, val)
        showData();
    } catch (error) {
        alert('valor numérico inválido')
    }

}
function removeElement() {
    let val = prompt('digite um valor a ser removido:')
    let el = list.remove(val)
    if (el) {
        alert(`removido o elemento ${el}`)
    } else {
        alert('valor não encontrado')
    }
    showData();
}
function removeElementAt() {
    let pos = prompt('digite uma posição a remover:')
    let el = list.removeAt(pos)
    if (el) {
        alert(`removido o elemento ${el}`)
    } else {
        alert('posição inválida')
    }
    showData();
}