function toggle() {
    //console.log('TODO:...');
    let button = document.querySelector('span.button');
    let divHiden = document.getElementById('extra');
    if (button.textContent == 'More') {
        divHiden.style.display = 'block';
        button.textContent = 'Less';
    } else if (button.textContent == 'Less') {
        divHiden.style.display = 'none';
        button.textContent = 'More';
    }
}
    
   
