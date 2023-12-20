const root = document.querySelector('#root');
const btnAdd = document.querySelector('.btn-add');
const showSum = document.querySelector('.show-sum');

let sum = 0; 

function Counter(step) {
    let countNum = 0;

    const makeElement = (tag, attr_n, attr_v, content) => {
        let output = document.createElement(tag);
        output.setAttribute(attr_n, attr_v);
        output.textContent = content;
        return output;
    };

    const updateCounter = () => {
        if (countNum + step < 0) {
            return;
        }
        countNum += step;
        number.textContent = countNum;
        sum += step;
        showSum.textContent = 'Sum = ' + sum;
    };

    const delCounter = (evt) => {
        evt.target.closest('.counter').remove();
        sum -= countNum;
        showSum.textContent = 'Sum = ' + sum;
    };

    const counter = makeElement('div', 'class', 'counter', '');
    const btnInc = makeElement('button', 'class', 'btn-inc', '+');
    const number = makeElement('h3', 'class', 'number', '0');
    const btnDec = makeElement('button', 'class', 'btn-dec', '-');
    const btnClr = makeElement('button', 'class', 'btn-clr', '0');
    const btnDel = makeElement('button', 'class', 'btn-del', 'X');

    btnInc.addEventListener('click', updateCounter);
    btnDec.addEventListener('click', () => {
        step = -step;
        updateCounter();
        step = -step;
    });
    btnClr.addEventListener('click', () => {
        countNum = 0;
        updateCounter();
    });
    btnDel.addEventListener('click', delCounter);

    counter.append(btnInc, number, btnDec, btnClr, btnDel);

    return counter;
}

btnAdd.addEventListener('click', () => {
    const stepInput = document.getElementById('stepInput').value;
    if (stepInput.length > 0) {
        const step = parseInt(stepInput);
        root.appendChild(Counter(step));
    } else {
        alert('กรุณากรอกค่า');
    }
});