var list = new DynamicList()

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
  // let text = list.toString('<br>')
  let out = $('#output')
  out.empty()
  out.append(text)
}
function insertElement() {
  let val = prompt('digite um valor a ser inserido:')
  list.append(val)
  showData()
}
function insertElementAt() {
  let val = prompt('digite um valor a ser inserido:')
  let pos = prompt('digite uma posição a inserir:')
  list.insert(pos, val)
  showData()
}
function removeElement() {
  let val = prompt('digite um valor a ser removido:')
  list.remove(val)
  showData()
}
function removeElementAt() {
  let pos = prompt('digite uma posição a remover:')
  list.removeAt(pos)
  showData()
}
