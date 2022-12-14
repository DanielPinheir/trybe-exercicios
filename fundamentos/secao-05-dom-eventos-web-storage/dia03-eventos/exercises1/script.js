const createDaysOfTheWeek = () => {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

//parte1
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const createDaysOfTheMonth = () => {
  const monthDayslist = document.querySelector('#days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const dayNumber = decemberDaysList[index];
    const elementLi = document.createElement('li');
    elementLi.innerHTML = dayNumber;
    dayNumber === 24 || dayNumber === 25 || dayNumber === 31
      ? (elementLi.className = 'day holiday')
      : (elementLi.className = 'day');
    if (
      dayNumber === 4 ||
      dayNumber === 11 ||
      dayNumber === 18 ||
      dayNumber === 25
    ) {
      elementLi.className += ' friday';
    }
    monthDayslist.appendChild(elementLi);
  }
};
createDaysOfTheMonth();

//parte2
const createHolidayButton = () => {
  const divButtons = document.querySelector('.buttons-container');
  const elementButton = document.createElement('button');
  elementButton.innerHTML = 'Feriados';
  elementButton.id = 'btn-holiday';
  divButtons.appendChild(elementButton);
};

createHolidayButton();

//parte3
const backGroundColorHoliday = () => {
  const holidayDays = document.querySelectorAll('.holiday');
  const holidayButton = document.querySelector('#btn-holiday');
  let clickButton = true;
  holidayButton.addEventListener('click', () => {
    if (clickButton) {
      for (let index = 0; index < holidayDays.length; index += 1) {
        holidayDays[index].style.backgroundColor = 'orange';
      }
      clickButton = false;
    } else {
      for (let index = 0; index < holidayDays.length; index += 1) {
        holidayDays[index].style.backgroundColor = 'rgb(238,238,238)';
      }
      clickButton = true;
    }
  });
};

backGroundColorHoliday();

//parte4
const createFridayButton = () => {
  const divButtons = document.querySelector('.buttons-container');
  const elementButton = document.createElement('button');
  elementButton.innerHTML = 'Sexta-feira';
  elementButton.id = 'btn-friday';
  divButtons.appendChild(elementButton);
};

createFridayButton();

//parte5
const changeTextFriday = () => {
  const fridayButton = document.querySelector('#btn-friday');
  const fridayDays = document.querySelectorAll('.friday');
  let isFriday = true;
  const listFridayDaysInTheMonth = [];

  fridayButton.addEventListener('click', () => {
    if (isFriday) {
      for (index = 0; index < fridayDays.length; index += 1) {
        listFridayDaysInTheMonth.push(fridayDays[index].innerHTML);
        fridayDays[index].innerHTML = 'Friday';
        fridayDays[index].style.color = 'green';
      }
      isFriday = false;
    } else {
      for (index = 0; index < fridayDays.length; index += 1) {
        fridayDays[index].innerHTML = listFridayDaysInTheMonth[index];
        fridayDays[index].style.color = '#777';
      }
      isFriday = true;
    }
  });
};

changeTextFriday();

//parte6
const dayMouseOver = () => {
  const dayMonth = document.querySelector('#days');
  dayMonth.addEventListener('mouseover', (event) => {
    // Ele pega o evento alvo e altera o estilo de fontSize para 30px
    event.target.style.fontSize = '30px';
    // Ele pega o evento alvo e altera o estilo de fontWeight para 600
    event.target.style.fontWeight = '600';
  });
};

const dayMouseOut = () => {
  const dayMonth = document.querySelector('#days');
  dayMonth.addEventListener('mouseout', (event) => {
    // Ele pega o evento alvo e altera o estilo de fontSize para 20px
    event.target.style.fontSize = '20px';
    // Ele pega o evento alvo e altera o estilo de fontWeight para 200
    event.target.style.fontWeight = '200';
  });
};
dayMouseOver();
dayMouseOut();

//parte7
const addTasks = (taskName) => {
  const tasks = document.querySelector('.my-tasks');
  const elementSpan = document.createElement('span');
  elementSpan.innerHTML = taskName;
  tasks.appendChild(elementSpan);
};
addTasks('Estudar');

//parte8
const addLegendCor = (corName) => {
  const myTasksClass = document.querySelector('.my-tasks');
  const elementDiv = document.createElement('div');
  elementDiv.className = 'task';
  elementDiv.style.backgroundColor = corName;
  myTasksClass.appendChild(elementDiv);
};
addLegendCor('orange');

//parte09
const selectTask = () => {
  const selectedTask = document.querySelectorAll('.task selected');
  const taskClass = document.querySelector('.task');
  taskClass.addEventListener('click', (event) => {
    // Caso selectedTask retornar um array com nenhum item
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
      isTaskSelect = true;
    } else {
      event.target.className = 'task';
    }
  });
};
selectTask();

//parte10
const setDayColor = () => {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener('click', (event) => {
    let eventTargetColor = event.target.style.color;
    console.log(eventTargetColor);
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)'; // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
};

setDayColor();

//bonus
const addMyAppointments = () => {
  const getInputField = document.querySelector('#task-input');
  const buttonAdd = document.querySelector('#btn-add');
  const taskList = document.querySelector('.task-list');

  buttonAdd.addEventListener('click', () => {
    // Caso o input tenha um valor de caracteres maior que 0
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = `- ${getInputField.value}`;
      taskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere');
    }
  });

  getInputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = `- ${getInputField.value}`;
      taskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};
addMyAppointments();
