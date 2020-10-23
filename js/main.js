var list = new DoublyLinkedList();

$().ready(function () {
    $('#insert').click(insertElement)
    $('#insert_at').click(insertElementAt)
    $('#remove').click(removeElement)
    $('#remove_at').click(removeElementAt)
})

function getANumber(message) {
    let val = prompt(message)
    if (isNaN(val))
        throw new Error("Não é um Número")
    return val
}

function showData() {
    let text = `<div class="ui label">
                    ${list.size() > 0 ? list.toString('</div><div class="ui label">') : 'vazia'}
                </div>`
    let out = $('#output')
    out.empty()
    out.append(text)
}
function insertElement() {
    try {
        let val = getANumber('digite um valor a ser inserido:')
        list.append(parseInt(val))
        showData();
    } catch (error) {
        alert(error.message)
    }
}

function insertElementAt() {
    try {
        let val = getANumber('digite um valor a ser inserido:')
        let pos = getANumber('digite uma posição a inserir:')
        list.insert(pos, val)
        showData();
    } catch (error) {
        alert(error.message)
    }

}
function removeElement() {
    try {
        let val = getANumber('digite um valor a ser removido:')
        removedHandle(list.remove(val))
    } catch (error) {
        alert(error.message)
    }

}

function removeElementAt() {
    try {
        let pos = getANumber('digite uma posição a remover:')
        removedHandle(list.removeAt(pos))
    } catch (error) {
        alert(error.message)
    }

}

function removedHandle(removed) {
    if (removed) {
        showData()
        alert(removed + ' removido com sucesso')
    } else {
        alert('não econtrado!')
    }
}