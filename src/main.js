var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log('Okay...');
        const properties = JSON.parse(xhr.response);

        cardContainer = document.querySelector(".card-container");

        for(let i in properties){
            let cardInfo = document.createElement("div");
            cardInfo.className = "card-info";

            let card = document.createElement("div");
            card.className = "card";

            let cardImg = document.createElement("img");
            cardImg.className = "card-img";
            cardImg.src = properties[i].photo;

            let propertyType = document.createElement("div");
            propertyType.className = "property-type";
            propertyType.innerHTML = properties[i].property_type;
            let propertyPrice = document.createElement("div");
            propertyPrice.className = "property-price";
            propertyPrice.innerHTML = `R$  ${properties[i].price.toFixed(2)} noite`;
            let propertyName = document.createElement("div");
            propertyName.className = "property-name";
            propertyName.innerHTML = properties[i].name;

            cardContainer.appendChild(card);
            card.appendChild(cardImg);
            card.appendChild(cardInfo);
            cardInfo.appendChild(propertyName);
            cardInfo.appendChild(propertyType);
            cardInfo.appendChild(propertyPrice);

        }

    } else {
        console.log('The request failed!');
    }

    console.log('This always runs...');

    
};

xhr.open('GET', 'https://dry-cliffs-94979.herokuapp.com/');
xhr.send();
