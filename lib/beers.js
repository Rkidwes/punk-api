let allData = ""

export async function getBeerData() {
    const res = await fetch('https://api.punkapi.com/v2/beers')
    allData = await res.json()
    return allData.sort((a, b) => {
        if (a.abv > b.abv) {
            return 1
        } else {
            return -1
        }
    })
}