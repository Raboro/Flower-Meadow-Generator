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
    const properties = constructProperties(flower);
    const flowerHtml = getFlowerTemplate().childNodes.item(1);
    const flowerProperties = flowerHtml.querySelector('.flowerPropertiesOverview');
    properties.forEach(property => flowerProperties.appendChild(property));
    return flowerHtml;
}

function constructProperties(flower) {
    const properties = [];
    Object.keys(flower).forEach((key) => properties.push([key, flower[key]]));
    const constructedProperties = [];
    properties.forEach(property => constructedProperties.push(constructProperty(property)));
    return constructedProperties;
}

const constructProperty = (property) => {
    const div = document.createElement('div');
    const description = document.createElement('p');
    description.textContent = property[0] + '-';
    const content = document.createElement('p');
    content.textContent = property[1];
    content.style.fontWeight = 'bold';
    div.appendChild(description);
    div.appendChild(content);
    div.classList.add('flowerProperty');
    return div;
};

const getFlowerTemplate = () => document.getElementById('flowerTemplate').content.cloneNode(true);
