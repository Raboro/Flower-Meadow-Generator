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
    const isToHigh = (parseInt(flower.stemHeight) + parseInt(flower.petalHeight) / 2) > 11;
    return isEmpty || isToLow || isToHigh;
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
    addActionListenerToFlower(flowerHtml);
    addStyling(flower, flowerHtml);
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
    div.classList.add('flowerProperty', 'defaultBorderBackgroundShadow');
    return div;
};

const getFlowerTemplate = () => document.getElementById('flowerTemplate').content.cloneNode(true);

function addActionListenerToFlower(flowerHtml) {
    addIncreaseCounterActionListener(flowerHtml);
    addDecreaseCounterActionListener(flowerHtml);
    addDeleteActionsListener(flowerHtml);
}

function addIncreaseCounterActionListener(flowerHtml) {
    flowerHtml.querySelector('.add').onclick = function() {
        this.parentNode.childNodes[5].textContent = parseInt(this.parentNode.childNodes[5].textContent) + 1;
    };
}

function addDecreaseCounterActionListener(flowerHtml) {
    flowerHtml.querySelector('.remove').onclick = function() {
        const value = this.parentNode.childNodes[5];
        if (parseInt(value.textContent) > 1) {
            value.textContent = parseInt(value.textContent) - 1;
        } else {
            value.textContent = 0;
        }
    };
}

function addDeleteActionsListener(flowerHtml) {
    flowerHtml.querySelector('.delete').onclick = function() {
        const id = getIDOfFlower(this.parentNode.parentNode);
        const overview = this.parentNode.parentNode.parentNode;
        for (const element of overview.childNodes) {
            if (getIDOfFlower(element) === id) {
                overview.removeChild(element);
            }
        }
        deleteFlowerByID(id);
    };
}

const getIDOfFlower = (node) => node.childNodes[3].childNodes[3].childNodes[1].textContent;

function deleteFlowerByID(id) {
    fetch('http://localhost:8081/flower/' + id, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).catch(error => console.log(error));
}

function addStyling(flower, flowerHtml) {
    const flowerStem = flowerHtml.querySelector('.flowerStem');
    const height = (flower.stemHeight >= 10) ? 90 : flower.stemHeight * 10;
    const width = (flower.stemWidth >= 10) ? 36 : flower.stemWidth * 4;
    addStylingToHtmlElement(flowerStem, width, height, flower.stemColor);
    const flowerPetal = flowerHtml.querySelector('.flowerPetal');
    const petalHeight = (flower.petalHeight >= 10) ? 27 : flower.petalHeight * 3;
    const petalWidth = (flower.petalWidth >= 10) ? 50 : flower.petalWidth * 8;
    addStylingToHtmlElement(flowerPetal, petalWidth, petalHeight, flower.petalColor);
    flowerPetal.style.marginTop = (-height - petalHeight) + '%';
}

function addStylingToHtmlElement(element, width, height, color) {
    element.style.height = height + '%';
    element.style.width = width + '%';
    element.style.marginTop = 98 - height + '%';
    element.style.marginLeft = 50 - (width / 2) + '%';
    element.style.backgroundColor = color;
    element.style.border = '2px solid ' + createDarkBorder(color);
    element.style.borderRadius = '10px';
}

function createDarkBorder(color) {
    const hex = color.replace('#', '');
    return '#' + darkerValue(hex.substring(0, 2)) + darkerValue(hex.substring(2, 4)) + darkerValue(hex.substring(4, 6));
}

function darkerValue(stringValue) {
    const value = parseInt(stringValue, 16);
    return Math.max(value - 20, 0).toString(16);
}
