function sendForminfo() {
    let productIds = [];
    for (let product of cart) {
        productIds.push(product.id);
    }
    let newOrder =  
    {
        contact: {
            firstName : document.getElementById('firstName').value, 
            lastName: document.getElementById('lastName').value, 
            address: document.getElementById('address').value, 
            city: document.getElementById('city').value, 
            email: document.getElementById('email').value
        },
        products: productIds
    };

    let url = 'http://localhost:3000/api/products/order';   
     
    fetch(url, {    
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOrder) 
    })
    .then(function (response) {
        if (response.ok) {        
            return response.json();
        }
    }) 
    .then(function (value) {  
        let orderId = value.orderId;
        let form = document.querySelector('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', 'confirmation.html?orderId=' + orderId)
        form.submit();      
        localStorage.clear();   
    })
    .catch(function (err) {
        console.log(err)
    });   
}