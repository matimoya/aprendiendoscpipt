let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let mountain5 = document.getElementById('mountain5');
let mountain4 = document.getElementById('mountain4');
let mountain6 = document.getElementById('mountain6');
let mountain7 = document.getElementById('mountain7');

let sol = document.getElementById('sol');

/* -- Text effect -- */
document.addEventListener('DOMContentLoaded', () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    const textElement = document.getElementById('text');

    textElement.onmouseover = event => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)]; // 27 para incluir la Ñ
                })
                .join("");
            
            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };
});

window.addEventListener('scroll', () =>
{
    let value = window.scrollY;

    text.style.marginTop = value * 2 + 'px';
    mountain4.style.top = value * -0.2 + 'px';
    mountain5.style.top = value * -0.2 + 'px';
    mountain6.style.top = value * -0.2 + 'px';
    mountain7.style.top = value * -0.2 + 'px';
    
    mountain1.style.left = value *0.2 + 'px';
    mountain2.style.left = value *-0.2 + 'px';

    sol.style.top = value *0.5 + 'px';
});