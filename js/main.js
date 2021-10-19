var list = new DoublyLinkedList();

$().ready(function () {
  $("#insert").click(insertElement);
  $("#insert_at").click(insertElementAt);
  $("#remove").click(removeElement);
  $("#remove_at").click(removeElementAt);
});

function separator() {
  const separatorIconClass =
    list instanceof DoublyLinkedList
      ? "arrows alternate horizontal"
      : "arrow right";
  const separatorIcon = `<i class="${separatorIconClass} icon" style="margin: 0"></i>`;
  return `</div>${separatorIcon}<div class="ui label">`;
}

function showData() {
  let text = "";
  if (list.size() > 0) {
    text = `<div class="ui label">${list.show(separator())}</div>`;
  }
  let out = $("#output");
  out.empty();
  out.append(text);
}

function insertElement() {
  try {
    let val = prompt("digite um valor a ser inserido:");
    list.append(parseInt(val));
    showData();
  } catch (error) {
    alert(error.message);
  }
}

function insertElementAt() {
  try {
    let val = prompt("digite um valor a ser inserido:");
    let pos = prompt("digite uma posição a inserir:");
    list.insert(parseInt(pos), parseInt(val));
    showData();
  } catch (error) {
    alert(error.message);
  }
}

function removeElement() {
  try {
    let val = prompt("digite um valor a ser removido:");
    list.remove(parseInt(val));
    showData();
  } catch (error) {
    alert(error.message);
  }
}

function removeElementAt() {
  try {
    let pos = prompt("digite uma posição a remover:");
    list.removeAt(parseInt(pos));
    showData();
  } catch (error) {
    alert(error.message);
  }
}
