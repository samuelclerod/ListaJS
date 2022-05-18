var list = new OrderedLinkedList();

$().ready(function () {
    $('#insert').click(insertElement);
    $('#insert_at').click(insertElementAt);
    $('#remove').click(removeElement);
    $('#remove_at').click(removeElementAt);
});

function showData() {
    let text = `<div class="ui label">
                    ${list.toString('</div><div class="ui label">')}
                </div>`
    let out = $('#output');
    out.empty();
    out.append(text);
}

function insertElement() {

    try {
        let val = prompt('digite um valor a ser inserido:');
        list.append(parseInt(val));
        showData();
    } catch (error) {
        alert(error.message);
    }

}

function insertElementAt() {
    try {
        let pos = prompt('digite uma posição a inserir:');
        let val = prompt('digite um valor a ser inserido:');
        list.insert(parseInt(pos), parseInt(val));
        showData();
    } catch (error) {
        alert(error.message);
    }
}

function removeElement() {
    try {
        let val = prompt('digite um valor a ser removido:');
        list.remove(parseInt(val));
        showData();
    } catch (error) {
        alert(error.message);
    }
}

function removeElementAt() {
    try {
        let pos = prompt('digite uma posição a remover:');
        list.removeAt(parseInt(pos));
        showData();
    } catch (error) {
        alert(error.message);
    }
}