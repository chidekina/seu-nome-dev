const day = document.getElementById('month-day__value-day');
const month = document.getElementById('month-day__value-month');
const name = document.querySelector('#result h4');
let firstName;
let secondName;

day.addEventListener('keypress', (event) => {

    if (event.key == 'Enter') {
        if (day.value >= 1 && day.value <= 31) {

            dayValue = day.value % 10;

            switch (dayValue) {
                case 1:
                case 2:
                    firstName = 'Desenvolvedor(a)';
                    break;

                case 3:
                case 4:
                case 5:
                    firstName = 'Programador(a)';
                    break;

                case 6:
                case 7:
                case 8:
                    firstName = 'Estagiário(a)';
                    break;

                case 9:
                case 0:
                    firstName = 'Senior(a)';
                    break;
            }
            name.textContent = '';
            name.innerText = firstName;
        } else{
             alert('Digite um dia válido');
             day.value = ''
            }
    }
})

month.addEventListener('change', (event) => {

    monthValue = Number(event.target.value);
    console.log(month);
    console.log(monthValue);
    switch (monthValue) {
        case 1:
            secondName = 'bugado(a)';
            break;

        case 2:
            secondName = 'do CTRL C, CTRL V';
            break;

        case 3:
            secondName = 'das gambiarras';
            break;

        case 4:
            secondName = 'que culpa o cache';
            break;

        case 5:
            secondName = 'que esquece o que faz';
            break;

        case 6:
            secondName = 'do git vazio';
            break;

        case 7:
            secondName = 'das try/ catch vazia';
            break;

        case 8:
            secondName = 'famosinho do LinkedIn';
            break;

        case 9:
            secondName = 'caçador de bugs';
            break;

        case 10:
            secondName = 'do Windows Pirata';
            break;

        case 11:
            secondName = 'do update sem where';
            break;

        case 12:
            secondName = 'do commit bugado';
            break;
    }

    name.textContent = firstName;
    name.innerText += ' ' + secondName
})