var list = new LinkedList();

$().ready(function () {
  $("#insert").click(insertElement);
  $("#insert_at").click(insertElementAt);
  $("#remove").click(removeElement);
  $("#remove_at").click(removeElementAt);
});

function showData() {
  let text = "";
  if (list.size() > 0) {
    const separatorIcon = '<i class="arrow right icon"></i>';
    const separator = `</div>${separatorIcon}<div class="ui label">`;
    text = `<div class="ui label">${list.show(separator)}</div>`;
  }
  let out = $("#output");
  out.empty();
  out.append(text);
}
function insertElement() {
  try {
    let val = prompt("digite um valor a ser inserido:");
    list.append(val);
    showData();
  } catch (error) {
    alert(error.message);
  }
}
function insertElementAt() {
  try {
    let val = prompt("digite um valor a ser inserido:");
    let pos = prompt("digite uma posição a inserir:");
    list.insert(pos, val);
    showData();
  } catch (error) {
    alert(error.message);
  }
}
function removeElement() {
  try {
    let val = prompt("digite um valor a ser removido:");
    list.remove(val);
    showData();
  } catch (error) {
    alert(error.message);
  }
}
function removeElementAt() {
  try {
    let pos = prompt("digite uma posição a remover:");
    list.removeAt(pos);
    showData();
  } catch (error) {
    alert(error.message);
  }
}
