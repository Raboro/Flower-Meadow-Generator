// eslint-disable-next-line no-unused-vars
function toggleAddFlower() {
    const elementsByClassName = document.getElementById('addFlowerContainer');
    if (elementsByClassName.className.endsWith('show')) {
        elementsByClassName.classList.remove('show');
    } else {
        elementsByClassName.classList.add('show');
    }
}

// eslint-disable-next-line no-unused-vars
function addFlower() {
    const flower = createFlower();
    if (isInvalid(flower)) {
        handleInvalidFlower();
        return;
    }
    sendValidFlower();
}

function createFlower() {
    return {
        "name": document.getElementById("addFlowerName").textContent,
        "category": document.getElementById("addFlowerCategory").textContent,
        "stemColor": document.getElementById("addFlowerStemColor").value,
        "stemHeight": document.getElementById("addFlowerStemHeight").value,
        "stemWidth": document.getElementById("addFlowerStemWidth").value,
        "stemThrones": document.getElementById("addFlowerStemThrones").checked,
        "PetalColor": document.getElementById("addFlowerPetalColor").value,
        "PetalHeight": document.getElementById("addFlowerPetalHeight").value,
        "PetalWidth": document.getElementById("addFlowerPetalWidth").value,
        "PetalThrones": document.getElementById("addFlowerPetalThrones").checked,
    };
}

function isInvalid(flower) {
    // implement
}

function handleInvalidFlower(flower) {
    // implement
}

function sendValidFlower(flower) {
    // implement
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
