import './styles/index.scss';

let obj = {
    'yellow': 'yellow',
    'red': 'red',
    'green': 'green',
    'blue':'blue'
}

const blockMain = document.querySelector('.blockMain');

function updateColor(event) {
    let target = event.target;

    if (target.classList.contains('blockMain')) {
        return;
    }

    for (const color in obj) {
        // if(color == key.classList) 
        if (target.className.includes(color)) {
            target.classList.remove(color)
        } else {
            target.classList.add(color)

        }
    }
}

blockMain.addEventListener('click', updateColor);
