const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');

const categories = {
    dogs: {
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs')
    },

    cats: {
        button: document.getElementById('cats-link'),
        content: document.getElementById('cats')
    },

    mices: {
        button: document.getElementById('mices-link'),
        content: document.getElementById('mices')
    },
}

let dogList = [
    {
        name: "chihuahua",
        region: "mexico",
        description: "A tiny noise dog"
    },
    {
        name: "beagle",
        region: "england",
        description: "A medium hunting dog"
    },
    {
        name: "german shepherd",
        region: "germany",
        description: "Big dog for farm work"
    },
    {
        name: "huskey",
        region: "siberia",
        description: "Big dog for recue work in gelid wather"
    },
];

let catList = [
    {
        name: "Abyssinian",
        region: "EE UU",
        description: ""
    },
    {
        name: "Aegean",
        region: "Rusia",
        description: ""
    },
    {
        name: "American Bobtail",
        region: "EE UU",
        description: ""
    },
    {
        name: "Birman",
        region: "France, Siria",
        description: ""
    },
    {
        name: "Bombay",
        region: "EE UU",
        description: ""
    }
];

/*let catList = [
    "Abyssinian",
    "Aegean",
    "American Bobtail",
    "Birman",
    "Bombay"
]; */

let miceList = [
    {
        name: "Black Mice",
        region: "EE UU",
        description: ""
    },
    {
        name: "Brown Mice",
        region: "Rusia",
        description: ""
    },
    {
        name: "Country Mice",
        region: "EE UU",
        description: ""
    },
    {
        name: "Field Mice",
        region: "France, Siria",
        description: ""
    },
    {
        name: "Normal Mice",
        region: "EE UU",
        description: ""
    }
];

/*let miceList = [
    "Black Mice",
    "Brown Mice",
    "Country Mice",
    "Field Mice",
    "Normal Mice"
]; */

categories.dogs.button.onclick = ()=> {
    if(categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML = '';
        
        return;
    }

    dogList.forEach(dog =>{
        categories.dogs.content.innerHTML += `<li>
            <span>${dog.name}</span>
            <div>region: ${dog.region}</div>
            <div>description: ${dog.description}</div>
        </li>`;
    });
}

categories.cats.button.onclick = ()=> {
    if(categories.cats.content.innerHTML){
        categories.cats.content.innerHTML = '';
        
        return;
    }
    catList.forEach(cat =>{
        categories.cats.content.innerHTML += `<li>
            <span>${cat.name}</span>
            <div>region: ${cat.region}</div>
            <div>description: ${cat.description}</div>
        </li>`;
    });
    }
/*categories.cats.button.onclick = ()=> {
    if(categories.cats.content.innerHTML){
        categories.cats.content.innerHTML = '';
                
         return;
    }   
    miceList.forEach(mice => 
        {
        categories.mices.innerHTML += `<li>${mice}</li>`
    });
}*/
categories.mices.button.onclick = ()=> {
    if(categories.mices.content.innerHTML){
        categories.mices.content.innerHTML = '';
        
        return;
    }
    miceList.forEach(mice =>{
        categories.mices.content.innerHTML += `<li>
            <span>${mice.name}</span>
            <div>region: ${mice.region}</div>
            <div>description: ${mice.description}</div>
        </li>`;
    });
    }

