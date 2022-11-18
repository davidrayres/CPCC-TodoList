
const toDoArray = [
  {
    who: 'David',
    what: 'eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    time: '12:00pm',
    date: new Date(),
  },
  {
    who: 'David',
    what: 'eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    time: '12:00pm',
    date: new Date(),
  },
  {
    who: 'David',
    what: 'eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    time: '12:00pm',
    date: new Date(),
  },
  {
    who: 'David',
    what: 'eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    time: '12:00pm',
    date: new Date(),
  },
  {
    who: 'David',
    what: 'eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    time: '12:00pm',
    date: new Date(),
  },
]

toDoArray.forEach((value, index) => {

  console.log(index, value)

    const newToDoLi = document.createElement('li')
    newToDoLi.innerHTML = `
    <input type="checkbox" onclick="toggleToDo(this)"/>
    <span class="id">${index + 1}. </span>
    <div>
      <p>${value.who}: ${value.what}</p>
      <p>Created: ${value.date}, ${value.time}</p>
    </div>
    `

    ToDoUl.appendChild(newToDoLi)

})


const buildToDoList = () => {


}

const addToDo = () => {
  const who = document.getElementById('who').value
  const what = document.getElementById('what').value
  const time = document.getElementById('time').value
  const date = document.getElementById('date').value

  const newToDoLi = document.createElement('li')
  newToDoLi.innerHTML = `
    <input type="checkbox" onclick="toggleToDo(this)"/>
    <span>#. </span>
    <div>
      <p>${who}: ${what}</p>
      <p>${time} on ${date}</p>
    </div>
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
