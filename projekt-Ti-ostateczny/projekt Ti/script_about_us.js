function p_appear(el) {
    let element = document.querySelector(`.${el}`);
    let dispElement = element.style.display;

    if(dispElement == 'block') {
        element.style.display = 'none';
    }
    else {
        element.style.display = 'block';
    }
}

const s1 = document.querySelector('.op1');
const s2 = document.querySelector('.op2');
const s3 = document.querySelector('.op3');
const s4 = document.querySelector('.op4');

s3.style.display = 'block';

document.addEventListener('keydown', (event) => {

   switch(event.key){
       case "ArrowLeft" : {
           if(s1.style.display === 'block') {
               s1.style.display = 'none';
               s4.style.display= 'block';
        }
        else if(s2.style.display === 'block') {
            s2.style.display = 'none';
            s1.style.display= 'block';
        } else if(s3.style.display === 'block') {
            s3.style.display = 'none';
            s2.style.display= 'block';
        }else if(s4.style.display === 'block') {
            s4.style.display = 'none';
            s3.style.display= 'block';
        } break;
    } 
    case "ArrowRight" : {
        if(s1.style.display === 'block') {
            s1.style.display = 'none';
            s2.style.display= 'block';
        }
        else if(s2.style.display === 'block') {
            s2.style.display = 'none';
            s3.style.display= 'block';
        } else if(s3.style.display === 'block') {
            s3.style.display = 'none';
            s4.style.display= 'block';
        }else if(s4.style.display === 'block') {
            s4.style.display = 'none';
            s1.style.display= 'block';
        }break;
    }
    default: break;
}
});