var list = new DynamicList()

$().ready(function () {
  $('#insert').click(insertElement)
  $('#insert_at').click(insertElementAt)
  $('#remove').click(removeElement)
  $('#remove_at').click(removeElementAt)
})

function showErroMessage(message) {
  let text = `
  <div class="ui red segment">${message} </div>
  `
  let out = $('#output')
  out.empty()
  out.append(text)
}

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
  const valStr = prompt('digite um valor a ser inserido:')
  try {
    const val = parseFloat(valStr)
    list.append(val)
    showData()
  } catch (error) {
    showErroMessage(error.message)
  }
}
function insertElementAt() {
  let valStr = prompt('digite um valor a ser inserido:')
  let posStr = prompt('digite uma posição a inserir:')

  try {
    const val = parseFloat(valStr)
    const pos = parseInt(posStr)
    list.insert(pos, val)
    showData()
  } catch (error) {
    showErroMessage(error.message)
  }
}
function removeElement() {
  let valStr = prompt('digite um valor a ser removido:')
  try {
    const val = parseFloat(valStr)
    list.remove(val)
    showData()
  } catch (error) {
    showErroMessage(error.message)
  }
}
function removeElementAt() {
  let posStr = prompt('digite uma posição a remover:')
  try {
    const pos = parseInt(posStr)
    list.removeAt(pos)
    showData()
  } catch (error) {
    showErroMessage(error.message)
  }
}
