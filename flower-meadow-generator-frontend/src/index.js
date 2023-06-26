// eslint-disable-next-line no-unused-vars
function toggleAddFlower() {
    clearValidation();
    toggleContainer('addFlowerContainer');
}

function toggleContainer(containerName) {
    const elementsByClassName = document.getElementById(containerName);
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
async function toggleOverviewFlower() {
    if (shouldLoadFlowers()) {
        await fetchFlowers();
    }
    toggleContainer('overviewFlowerContainer');
}

const shouldLoadFlowers = () => !document.getElementById('overviewFlowerContainer').className.endsWith('show');

async function fetchFlowers() {
    await fetch('http://localhost:8081/flower')
        .then(result => result.json())
        .then(flowers => loadFlowers(flowers))
        .catch(error => console.error(error));
}

function loadFlowers(flowers) {
    const flowerFlexbox = document.getElementById('overviewFlowerFlexbox');
    while (flowerFlexbox.firstChild) {
        flowerFlexbox.removeChild(flowerFlexbox.lastChild);
    }
    flowers.forEach(f => flowerFlexbox.appendChild(constructFlower(f)));
}

function constructFlower(flower) {
    const flowerHtml = getFlowerTemplate().childNodes.item(1);
    const name = document.createElement('H5');
    name.textContent = flower.name;
    const category = document.createElement('H5');
    category.textContent = flower.category;
    const stemColor = document.createElement('H5');
    stemColor.textContent = flower.stemColor;
    const stemHeight = document.createElement('H5');
    stemHeight.textContent = flower.stemHeight;
    const stemWidth = document.createElement('H5');
    stemWidth.textContent = flower.stemWidth;
    const stemThrones = document.createElement('H5');
    stemThrones.textContent = flower.stemThrones;
    const petalColor = document.createElement('H5');
    petalColor.textContent = flower.petalColor;
    const petalHeight = document.createElement('H5');
    petalHeight.textContent = flower.petalHeight;
    const petalWidth = document.createElement('H5');
    petalWidth.textContent = flower.petalWidth;
    const petalThrones = document.createElement('H5');
    petalThrones.textContent = flower.petalThrones;
    const flowerProperties = flowerHtml.querySelector('.flowerPropertiesOverview');
    flowerProperties.appendChild(name);
    flowerProperties.appendChild(category);
    flowerProperties.appendChild(stemColor);
    flowerProperties.appendChild(stemHeight);
    flowerProperties.appendChild(stemWidth);
    flowerProperties.appendChild(stemThrones);
    flowerProperties.appendChild(petalColor);
    flowerProperties.appendChild(petalWidth);
    flowerProperties.appendChild(petalThrones);
    return flowerHtml;
}

const getFlowerTemplate = () => document.getElementById('flowerTemplate').content.cloneNode(true);