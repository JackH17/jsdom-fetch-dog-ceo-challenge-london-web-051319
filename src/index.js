console.log('%c HI', 'color: firebrick')

function findDogs() {
     return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(images => displayDogs(images));
}

function findDogBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(breeds => displayDogBreeds(breeds));
}

function displayDogBreeds(breeds) {
    const cont = document.querySelector('#dog-breeds')
        for( const element in breeds["message"]) {
            const li = document.createElement('li')
            li.innerHTML = element
            li.addEventListener('click', function(){
            li.style.color === 'red' ? li.style.color = 'black' : li.style.color = 'red';
            })
            cont.appendChild(li)
        }
    }


function displayDogs(images) {
    const cont = document.querySelector('#dog-image-container')
    images["message"].forEach(image => {
        const img = document.createElement('img')
        img.src = image
        cont.appendChild(img)
    })
}

function findLetter() {
    const dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change', function () { 
        console.log("i was changed");
        let firstLetter = dropdown.value;
        console.log(firstLetter);
        fetchDogsNew(firstLetter)
    });
}

function fetchDogsNew(data) {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(breedList => displaySortedDogs(breedList, data));
}

function displaySortedDogs(dogs, data) {
    const altList = document.querySelector('#dog-breeds');
    altList.innerHTML = "";
    for(const element in dogs["message"]) {
        if(element[0] === data){
       console.log(element);
       const newLi = document.createElement('li')
       newLi.innerHTML = element;
       altList.appendChild(newLi);
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    console.log("Hello again");
    findDogs()
    // findDogBreeds()
    findLetter()
  })