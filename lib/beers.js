// import React, { Component, useState } from 'React'

// const [allData, setAllData] = useState({})
let allData = ''

// class StateSet extends Component {
//     constructor(props) {
//         this.setState = {
//             apiUrl: 'https://api.punkapi.com/v2/beers',
//             allData: '[]',
//         }
//     }
// }

export default async function getData(apiUrl) {

    const res = await fetch(apiUrl)
    allData = await res.json()
    return allData.sort((a, b) => {
        if (a.abv > b.abv) {
            return 1
        } else {
            return -1
        }
    })
}

// export default async function getBeerData() {
//     const res = await fetch(apiUrl)
//     allData = await res.json()
//     return allData
// }

// export function updateRecords({ recordsQuantity }) {
//     const apiUrl = `https://api.punkapi.com/v2/beers?per_page=${recordsQuantity}`
//     return apiUrl
// }

// export function sortRecords({ allData }) {
//     allData.sort((a, b) => {
//         if (a.abv > b.abv) {
//             return 1
//         } else {
//             return -1
//         }
//     })
//     return
// }

export const apiUrl = "https://api.punkapi.com/v2/beers"

export function updateQuantity(apiUrl) {
    apiUrl = 'https://api.punkapi.com/v2/beers?per_page=2'
    getData(apiUrl)
}

export function getAllBeerIds({ allBeers }) {

    return allBeers.map(beer => {
        return {
            params: {
                id: beer.id
            }
        }
    })
}

// export async function getBeerData(id) {
//     const fullPath = path.join(postsDirectory, `${id}.md`)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)

//     // Use Remark to convert markdown in to HTML string
//     const processedContent = await remark()
//         .use(html)
//         .process(matterResult.content)
//     const contentHtml = processedContent.toString()

//     // Combine the data with the id
//     return {
//         id,
//         contentHtml,
//         ...matterResult.data
//     }
// }