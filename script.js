let h1 = document.createElement('h1');
h1.innerText = "0"
document.body.append(h1);

let ul = document.createElement('ul');
for (let i = 1; i <= 5; i++){
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.id = "buttons" + i;

    li.append(button);
    ul.append(li);
}
document.body.append(ul);

//1
buttons1.innerText = "Random color";
buttons1.addEventListener('click', function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
})