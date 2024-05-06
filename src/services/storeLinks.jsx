// buscar links salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let LinksSaves = JSON.parse(myLinks) || [];
    return LinksSaves;
}

// salvar em um localStarage

export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);


    // se já tiver um link salvo com id eu não vou deixar duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id)
    if (hasLink) {
        console.log('Esse link já existe na sua lista!')
        return;
    }

    // Adiconar o novo link na lista
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucesso!')
}

// deletar link

export function deleteLink(links, id) {
    let myLinks = links.filter(item => {
        return (item.id !== id)
    });
    localStorage.setItem('@encurtalink', JSON.stringify(myLinks))
    console.log('Link deletado com sucesso!')
    return myLinks;
}