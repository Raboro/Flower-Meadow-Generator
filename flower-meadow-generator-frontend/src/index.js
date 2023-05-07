// eslint-disable-next-line no-unused-vars
function toggleAddFlower() {
    clearValidation();
    const elementsByClassName = document.getElementById('addFlowerContainer');
    if (elementsByClassName.className.endsWith('show')) {
        elementsByClassName.classList.remove('show');
    } else {
        elementsByClassName.classList.add('show');
    }
}

function clearValidation() {
    document.getElementById('showValidation').innerText = '';
}

// eslint-disable-next-line no-unused-vars
function addFlower() {
    clearValidation();
    const flower = createFlower();
    if (isInvalid(flower)) {
        handleInvalidFlower();
        return;
    }
    sendValidFlower(flower);
}

function createFlower() {
    return {
        name: document.getElementById('addFlowerName').value,
        category: document.getElementById('addFlowerCategory').value,
        stemColor: document.getElementById('addFlowerStemColor').value,
        stemHeight: document.getElementById('addFlowerStemHeight').value,
        stemWidth: document.getElementById('addFlowerStemWidth').value,
        stemThrones: document.getElementById('addFlowerStemThrones').checked,
        petalColor: document.getElementById('addFlowerPetalColor').value,
        petalHeight: document.getElementById('addFlowerPetalHeight').value,
        petalWidth: document.getElementById('addFlowerPetalWidth').value
    };
}

function isInvalid(flower) {
    const isEmpty = flower.name === '' || flower.category === '';
    const isToLow = flower.stemWidth < 1 || flower.stemHeight < 1 || flower.petalWidth < 1 || flower.petalHeight < 1;
    return isEmpty || isToLow;
}

const handleInvalidFlower = () => editFlowerStatus('Invalid Flower', 'red');

function editFlowerStatus(text, color) {
    const element = document.getElementById('showValidation');
    element.innerText = text;
    element.style.color = color;
}

function sendValidFlower(flower) {
    fetch('http://localhost:8081/flower', {
        method: 'POST',
        body: JSON.stringify(flower),
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).catch(error => console.log(error));
    editFlowerStatus('valid Flower', 'green');
}

// eslint-disable-next-line no-unused-vars
function test() {
    fetch('http://localhost:8081/flower')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}
