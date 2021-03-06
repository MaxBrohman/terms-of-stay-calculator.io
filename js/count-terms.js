//count-terms.js
import DateClass from './date-class.js';
import Result from './result.js';

//День въезда считается первым днем пребывания, поэтому 89
const ALLOWED_TERM = 89;

const getDaysWord = (num) => {
    const daysWordEnd = '' + num;
    const lastSymbol = +daysWordEnd[daysWordEnd.length-1];
    switch(lastSymbol){
        case 1:
        return 'день';
        case 2:
        case 3:
        case 4:
        return 'дня';
        default:
        return 'дней';
    }
};

//Функция подсчета результата и передающая результат в Result 
export default () => {
    const terms = [];
    let result = 0;
    const allInputs = document.querySelectorAll('.inputs-wrapper');
    /*Цикл for использован для того, чтобы return при невалидных данных выбрасывал
     сразу из функции подсчета с вызовом Result. При использовании, например, forEach,
      return бы выбрасывал только из функции callback*/
    for(let i = 0; i < allInputs.length; i++){
        try{
            terms.push(new DateClass(allInputs[i].querySelectorAll('input')));
        } catch(err) {
            allInputs[i].querySelector(`.${err.message}`).borderColor = '#EC2127';
            return (new Result('Для подсчета сроков пребывания необходимо ввести даты выездов из РФ и въездов в РФ в формате дд.мм.гггг. Проверьте правильность введенных данных.', true)).render();
        }
        if(terms[i-1] && terms[i].inDate - terms[i-1].outDate < 0){
            return new Result('Дата нового въезда в РФ не может быть раньше даты последнего выезда из РФ', true).render();
        } else{
            result += terms[i].terms;
        }
    }
    const showDays = () => {
        const days = Math.floor(ALLOWED_TERM - result/(1000 * 60 * 60 * 24));
        if(days < 0){
            return `Сроки Вашего пребывания в РФ превышены на ${-days} ${getDaysWord(days)}`;
        } else if(days == 0){
            return 'Сроки Вашего пребывания в РФ истекли. Дальнейшее нахождение в РФ без законных оснований может повлечь ограничения на въезд в РФ';
        } else {
            return `Сроки Вашего пребывания в РФ не нарушены. Вы можете находиться в РФ еще ${days} ${getDaysWord(days)}`;
        }
    };
    if(result < 0){
        return new Result("При вводе дат допущены ошибки. Проверьте правильность введенных данных", true).render();
    }
    return new Result(showDays(), false).render();
};