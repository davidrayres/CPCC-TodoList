const addToDo = () => {
  const who = document.getElementById('who').value
  const what = document.getElementById('what').value
  const time = document.getElementById('time').value
  const date = document.getElementById('date').value

  const newToDoLi = document.createElement('li')
  newToDoLi.innerHTML = `
    <input type="checkbox" onclick="toggleToDo(this)"/>
    <span>${who}: ${what} / ${time} on ${date}</span>
  `

  ToDoUl.appendChild(newToDoLi)

  document.getElementsByClassName('add').value = ''
}

const toggleToDo = (x) => {
  console.log(x.parentElement)
  x.checked
    ? DoneUl.appendChild(x.parentElement)
    : ToDoUl.appendChild(x.parentElement)
}
