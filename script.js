const sketchDiv = document.querySelector('.sketchDiv');
const colorPicker = document.querySelector('.colorPicker');
const resetBtn = document.querySelector('.resetBtn');
const rgbBtn = document.querySelector('.rgbBtn');

let color = 'black';

let isSimpleColor = true;
let isRGB = false;

//creating individual element in List of elements
const createChildDiv = () => {
    const childDiv = document.createElement('div');
    childDiv.classList.add('element');
    return childDiv;
}

//creating the sketch board
const sketch = (num) => {
    for (let i = 0; i <= num; i++) {
        sketchDiv.appendChild(createChildDiv());
    }
}
sketch(949);

const elements = document.querySelectorAll('.element');

//choosing color based on if user selected simple color or RGB state
let getColor = () => {
    if (isSimpleColor) {
        return color;
    }
    else if (isRGB) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgba(${r},${g},${b})`;
    }
}


//mousedown, mouseup and mousemove states are merged together so when mouse key is pressed and ouse is moved around only then sketching would happen
let isMousedown = false;
elements.forEach((element) => {
    element.addEventListener('mousedown', () => {
        isMousedown = true;
    })
    element.addEventListener('mouseup', () => {
        isMousedown = false;
    })
    element.addEventListener('mousemove', () => {
        if (isMousedown) {
            element.style.backgroundColor = getColor();
            // if (isSimpleColor) {
            //     element.style.backgroundColor = getColor();
            // } else if (isRGB) {
            //     element.style.backgroundColor = getColor();
            // }
        }
    })
    element.addEventListener('click', () => {
        element.style.backgroundColor = getColor();
    })
})

//cleaning the sketchBoard
resetBtn.addEventListener('click', () => {
    elements.forEach((element) => {
        isSimpleColor = true;
        isRGB = false;
        element.style.backgroundColor = 'white';
    })
})

colorPicker.addEventListener('input', () => {
    isSimpleColor = true;
    isRGB = false;
    color = colorPicker.value;
})
rgbBtn.addEventListener('click', () => {
    isRGB = true;
    isSimpleColor = false;
})
