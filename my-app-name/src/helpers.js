const choice = ({items}) => {
    let rando = Math.floor(Math.Random() * items.length)
    return items[rando];
}

const remove = ({item, items}) => {
    for(let i in items) {
        if (items[i] === item){
            return [...items.slice(0,1)]
        }
    }
}

export {choice, remove}