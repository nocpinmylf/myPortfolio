const collapseBTN = document.getElementById('collaspe-btn');
const headerNav = document.getElementsByClassName('nav')[0];

// header
collapseBTN.addEventListener('click', () => {
  headerNav.classList.toggle('hide');
});


