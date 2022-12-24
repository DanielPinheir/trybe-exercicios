const backGroundColor = () => {
  const selectElement = document.querySelector('select');
  selectElement.addEventListener('change', () => {
    let valueSelected = selectElement.selectedOptions[0].value;
    document.body.style.backgroundColor = valueSelected;
    localStorage.setItem('backgroundColor', valueSelected);
  });
};

const fontSize = () => {
  const fontSizeInput = document.querySelector('#font-size');
  const firstParagraph = document.querySelector('p');
  fontSizeInput.addEventListener('change', () => {
    firstParagraph.style.fontSize = `${fontSizeInput.value}px`;
    localStorage.setItem('fontSize', `${fontSizeInput.value}px`);
  });
};

window.onload = () => {
  backGroundColor();
  const savedBackGround = localStorage.getItem('backgroundColor');
  document.body.style.backgroundColor = savedBackGround;
  fontSize();
  const savedFontSize = localStorage.getItem('fontSize');
  const firstParagraph = document.querySelector('p');
  firstParagraph.style.fontSize = savedFontSize;
};
