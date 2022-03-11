const generateBtn = document.querySelector('#generateBtn');
const clearBtn = document.querySelector('#clearBtn');
const lowerInput = document.querySelector('#lower');
const upperInput = document.querySelector('#upper');
const spanElement = document.querySelector('span')

generateBtn.addEventListener('click', function (){
    const min = Number(lowerInput.value);
    const max = Number(upperInput.value);

    if(!isNaN(min) && !isNaN(max) && max>min){
        const number = Math.floor(Math.random() * (max-min) + min);

        spanElement.innerHTML = number;

    }else{
        alert("Enter Valid Input!");
    }

});

clearBtn.addEventListener('click', function (){
    lowerInput.value = '';
    upperInput.value = '';
    spanElement.innerText = '';
});