const productsNum = 5;

let products = [];

initiliazeProducts = () => {
    products = [];
    for (let i = 0; i < productsNum; i++)
        products.push({ id: i, value: 0 });
};

resetProducts = () => {
    if (products.length === productsNum) {
        initiliazeProducts();
        products.forEach(product => {
            updateProductOnDOM(product);
        });
    } else {
        initiliazeProducts();
        const divRoot = document.getElementById('root');
        divRoot.innerHTML = '';
        renderList();
    }
};

incrementProduct = productId => {
    let product = products.filter(p => p.id === productId)[0];
    const index = products.indexOf(product);
    product.value++;
    products[index] = product;
    updateProductOnDOM(product);
};

decrementProduct = productId => {
    let product = products.filter(p => p.id === productId)[0];
    const index = products.indexOf(product);
    product.value = product.value === 0 ? 0 : product.value - 1;
    products[index] = product;
    updateProductOnDOM(product);
};

deleteProduct = productId => {
    let product = products.filter(p => p.id === productId)[0];
    products.pop(product);
    removeProductFromDom(product);
};

updateProductOnDOM = product => {
    const productElem = document.getElementById(product.id);
    productElem.innerText = product.value;
    updateTotal();
};

removeProductFromDom = product => {
    const liElem = document.getElementById(product.id).parentElement;
    const btns = liElem.getElementsByTagName('button');
    for (let btn of btns)
        btn.removeEventListener('click', btn.innerText === '+' ? incrementProduct : decrementProduct);
    liElem.remove();
    updateTotal();
};

renderList = () => {
    const btnClassesPrimary = 'btn btn-primary m-2';
    const btnClassesSecondary = 'btn btn-secondary m-2';
    const divRoot = document.getElementById('root');
    let resetElem = document.createElement('button');
    resetElem.className = btnClassesPrimary;
    resetElem.innerText = 'Reset';
    resetElem.onclick = () => { resetProducts(); };
    divRoot.appendChild(resetElem);
    let totalElem = document.createElement('span');
    totalElem.id = 'total';
    totalElem.className = 'badge badge-warning m-1 p-2';
    totalElem.innerText = 0;
    divRoot.appendChild(totalElem);
    let listElem = document.createElement('ul');
    listElem.id = 'list';
    divRoot.appendChild(listElem);
    products.forEach(product => {
        let nodeElem = document.createElement('li');
        let valueElem = document.createElement('span');
        valueElem.className = 'badge badge-dark m-1 p-2';
        valueElem.id = product.id;
        valueElem.innerText = product.value;
        let incElem = document.createElement('button');
        incElem.className = btnClassesSecondary;
        incElem.innerHTML = '+';
        incElem.onclick = () => { incrementProduct(product.id); };
        let decElem = document.createElement('button');
        decElem.className = btnClassesSecondary;
        decElem.innerHTML = '-';
        decElem.onclick = () => { decrementProduct(product.id); };
        let deleteElem = document.createElement('button');
        deleteElem.className = 'btn btn-danger';
        deleteElem.innerHTML = 'delete';
        deleteElem.onclick = () => { deleteProduct(product.id); };
        nodeElem.appendChild(valueElem);
        nodeElem.appendChild(incElem);
        nodeElem.appendChild(decElem);
        nodeElem.appendChild(deleteElem);
        listElem.appendChild(nodeElem);
    });
}

initiliazeProducts();

updateTotal = () => {
    const totalElem = document.getElementById('total');
    totalElem.innerText = products.filter(p => p.value > 0).length;
}

window.onload = () => {
    renderList();
};