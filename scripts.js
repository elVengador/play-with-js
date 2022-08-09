const onAddItem = (itemsElement) => {
    const divElement = document.createElement('div')
    divElement.textContent = "Hello, World"
    itemsElement.appendChild(divElement)
}

const onRemoveItem = () => {
    console.log('remove');
}

const onGetJoke = async () => {
    // enable loading animation
    console.log('loading...');
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    console.log('done');

    if (!res.ok) throw new Error('cant make petition')

    const data = await res.json()
    console.log(data.value)
}

const main = () => {
    const itemsElement = document.querySelector('#items')
    const addItemElement = document.querySelector('#add-item')
    const removeItemElement = document.querySelector('#remove-item')
    const getJokeElement = document.querySelector('#get-joke')
    if (!itemsElement || !addItemElement || !removeItemElement || !getJokeElement) throw new Error('Buttons doesn\'t exist')

    addItemElement.addEventListener('click', () => onAddItem(itemsElement))
    removeItemElement.addEventListener('click', onRemoveItem)
    getJokeElement.addEventListener('click', onGetJoke)
}


main()