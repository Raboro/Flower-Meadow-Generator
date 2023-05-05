function toggleAddFlower() {
    const elementsByClassName = document.getElementById('addFlowerContainer');
    if (elementsByClassName.className.endsWith('show')) {
        elementsByClassName.classList.remove('show');
    } else {
        elementsByClassName.classList.add('show');
    }
}

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
