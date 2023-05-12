const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); 
   
    if (APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
   
    

}


const renderPokemon = async (pokemon) =>{ 
    
    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTMl = '';

    const data = await fetchPokemon(pokemon);
    if (data){
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']
    ['black-white']['animated']['front_default']
    input.value = '';
    searchPokemon = data.id;
    }
    else{
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found :c';
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
  
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    input.value = '';

})

renderPokemon(searchPokemon);

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
    }
});
buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon)
});
    



function tocaSom () {
    document.querySelector('#buttonsound').play();
}

function tocaTema(){
    document.querySelector('#tema').play();
    
}
function pausaTema(){
    document.querySelector('#tema').pause();
    

}

document.querySelector('.btn-next').onclick = tocaSom;
document.querySelector('.btn-prev').onclick = tocaSom;
document.querySelector('.play-tema').onclick = tocaTema;
document.querySelector('.pause-tema').onclick = pausaTema;




