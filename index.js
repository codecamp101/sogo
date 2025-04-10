/*this changes the text inside an element
document.querySelector('#user > b').textContent = 'Tordue';
document.querySelector('#user > i').textContent = '?'
*/
//this is an array of numbers
//[1,2,'computer',4]
const eye = document.querySelector('#eye');
const output = document.querySelector('output');
const ipt = document.querySelector('input');
const fm = document.querySelector('form');
const pop = document.querySelector('#pop')
const user = document.querySelector('#user')
const start = document.querySelector('#start')
const pan = document.querySelector('#panel')
// this unmasks the password
eye.addEventListener('mousedown', () => {
    ipt.type = 'text';
});
//this masks the password
eye.addEventListener('mouseup', () => {
    ipt.type = 'password';
});
//this submits the password with the form
fm.addEventListener('submit', (e) => {
    e.preventDefault(); //this will stop the page from reloading
    const pd ='247269754513';
    if (pd === ipt.value) {
        user.remove()
        fm.remove();
        output.textContent = 'Signing you in . . . ';
        const timeoutID = setTimeout(() => {
            output.remove();
            pop.showPopover();
            clearTimeout(timeoutID);
        }, 3000);
       
    } else {
        output.textContent = 'Wrong Password';
    }
});
// this shows/hides the #panel
start.addEventListener('click', () => {
     pan.classList.toggle('on');
});