module.exports = function toReadable (number) {
const first = (number.toString()[0]) * 1;
const second = (number.toString()[1]) * 1;
const third = (number.toString()[2]) * 1;
const secondthird = (`${second}${third}` * 1);

if(number < 20){
    return oneDidgit (number);
}
else if(number < 100 && second === 0){
    return twoDidgits(first);
}
else if(number < 100 && second !== 0){
    return `${twoDidgits(first)}${' '}${oneDidgit(second)}`;
}
else if(third === 0 && second === 0){
    return `${oneDidgit(first)}${' hundred'}`;
}
else if(third ===0 && second === 1){
    return `${oneDidgit(first)}${' hundred '}${oneDidgit(secondthird)}`;
}
else if(third === 0 && second !== 0){
    return `${oneDidgit(first)}${' hundred '}${twoDidgits(second)}`;
}
else if(third !==0 && second === 0){
    return `${oneDidgit(first)}${' hundred '}${oneDidgit(third)}`;
}
else if(third !==0 && second === 1){
    return `${oneDidgit(first)}${' hundred '}${oneDidgit(secondthird)}`;
}
else {
    return `${oneDidgit(first)}${' hundred '}${twoDidgits(second)}${' '}${oneDidgit(third)}`;
}


function oneDidgit (number){
    let result;
    switch (number) {
        case 0:
          result = 'zero';
          break;
        case 1:
          result = 'one';
          break;
        case 2:
          result = 'two';
          break;
            case 3:
          result = 'three';
          break;
            case 4:
          result = 'four';
          break;
            case 5:
          result = 'five';
          break;
            case 6:
          result = 'six';
          break;
            case 7:
          result = 'seven';
          break;
            case 8:
          result = 'eight';
          break;
            case 9:
          result = 'nine';
          break;
          case 10:
            result = 'ten';
            break;
            case 11:
                result = 'eleven';
            break;
            case 12:
                result = 'twelve';
            break;
            case 13:
                result = 'thirteen';
            break;
            case 14:
                result = 'fourteen';
            break;
            case 15:
                result = 'fifteen';
            break;
            case 16:
                result = 'sixteen';
            break;
            case 17:
                result = 'seventeen';
            break;
            case 18:
                result = 'eighteen';
            break;
            case 19:
                result = 'nineteen';
            break;    
        default:
          result = null;
      }
      return result;
    };

function twoDidgits (number){
    let result;
    switch (number) {
        case 2:
          result = 'twenty';
          break;
            case 3:
          result = 'thirty';
          break;
            case 4:
          result = 'forty';
          break;
            case 5:
          result = 'fifty';
          break;
            case 6:
          result = 'sixty';
          break;
            case 7:
          result = 'seventy';
          break;
            case 8:
          result = 'eighty';
          break;
            case 9:
          result = 'ninety';
          break;
        default:
          result = null;
      }   
      return result;
    };
  
}
