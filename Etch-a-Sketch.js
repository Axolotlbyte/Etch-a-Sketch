const container = document.querySelector('#container');
let hov = 0;
//let x = prompt("what size should your canvas have?", )
for(i = 0 ; i< 16 ; i++){
    for(j = 0 ; j < 16 ; j++){
        const div = document.createElement('div');
        div.classList.add('div');
        div.style.backgroundColor= "white";
        div.addEventListener('mouseover', () =>{
            hov++;
            if(hov < 100){
                div.style.backgroundColor = "black";
            }
        reset.addEventListener('click', () => {
            div.style.backgroundColor="white";
            hov = 0;
        });
        });
        container.appendChild(div);
    }
}

const reset = document.querySelector('#reset');
const red = document.querySelector('red');