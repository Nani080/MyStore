const products =[
    {id:1,name:"P1",price:34},
    {id:2,name:"P2",price:45},
    {id:3,name:"P3",price:56},
]
const showProducts = () => {
    let divProducts = document.getElementById('divProducts');
    let str=""
    products.forEach((product) => {
        str += `
        <div>
        <p>
            Product ID: ${product.id},
            Product Name: ${product.name},
            Product Price: ${product.price}
            <button id='addCartBtn${product.id}' onclick='addCart(${product.id})'>Add to Cart</button>
        </p>
        </div>
        `
        divProducts.innerHTML = str;
    });
};

const cart = {}
const addCart = (id) => {
    cart[id] = 1;
    document.getElementById(`addCartBtn${id}`).disabled = true;
    showCart();
};
const increaseQuantity = (id) => {
    cart[id] += 1;
    items.innerHTML = 100;
    showCart();
};
const decreaseQuantity = (id) => {
    if(cart[id] > 1) {
        cart[id] -= 1;
    } else {
        delete cart[id];
        document.getElementById(`addCartBtn${id}`).disabled = false;
    }
    items.innerHTML = 50;
    showCart();
};
const deleteProduct = (id) => {
    delete cart[id];
    document.getElementById(`addCartBtn${id}`).disabled = false;
    showCart();
};
const showCart = () => {
    let count=Object.keys(cart).length;
    items.innerHTML = count;
    showTotal();
    let divCart = document.getElementById('divCart');
    let str = "";
    for (const key in cart) {
        str += `
        <div>
        <p>
            Product ID: ${key},
            Quantity:${cart[key]}
            Price: ${cart[key] * products.find(product => product.id == key).price}
            <button id="inc" onclick='increaseQuantity(${key})'>+</button>
            <button id="dec" onclick='decreaseQuantity(${key})'>-</button>
            <button id="del" onclick='deleteProduct(${key})'>Delete</button>
        </p>
        </div>
        `
    }
    divCart.innerHTML = str;
};
const showTotal = () => {
    let total = 0;
    for (const key in cart) {
        total += cart[key] * products.find(product => product.id == key).price;
    }
    document.getElementById('total').innerHTML = total;
}
const displayCart = () => {
    /*let cartDiv = document.getElementById('divCartContainer');
    cartDiv.style.display = 'block';
    let prodDiv = document.getElementById('divProductsContainer');
    prodDiv.style.display = 'none';
    showCart();*/
    divCartContainer.style.display = 'block';
    divProductsContainer.style.display = 'none';
}
const hideCart = () => {
    /*let cartDiv = document.getElementById('divCartContainer');
    cartDiv.style.display = 'none';
    let prodDiv = document.getElementById('divProductsContainer');
    prodDiv.style.display = 'block';*/
    divCartContainer.style.display = 'none';
    divProductsContainer.style.display = 'block';
}