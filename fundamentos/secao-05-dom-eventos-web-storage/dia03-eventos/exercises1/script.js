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
const createDaysOfTheMonth = () => {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const monthDayslist = document.querySelector('#days');

  for (let index = 0; index <= decemberDaysList.length; index += 1) {
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
