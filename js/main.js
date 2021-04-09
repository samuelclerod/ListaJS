var list = new DoublylinkedList();

$().ready(function () {
    $('#insert').click(insertElement)
    $('#insert_at').click(insertElementAt)
    $('#remove').click(removeElement)
    $('#remove_at').click(removeElementAt)
})

function showData() {
    let text = `<div class="ui label">
                    ${list.toString('</div><div class="ui label">')}
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
        let val = prompt('digite um valor a ser inserido:')
        let pos = prompt('digite uma posição a inserir:')
        list.insert(pos, val)
        showData();
    } catch (error) {
        alert('Erro :' + error.message);
    }
}
function removeElement() {
    try {
        let val = prompt('digite um valor a ser removido:')
        list.remove(val)
        showData();
    } catch (error) {
        alert('Erro :' + error.message);
    }
}
function removeElementAt() {
    try {
        let pos = prompt('digite uma posição a remover:')
        list.removeAt(pos)
        showData();
    } catch (error) {
        alert('Erro :' + error.message);
    }

}