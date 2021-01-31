import Layout from '../../components/layout'
import { getAllBeerIds } from '../../lib/beers'


export default function Beer() {
    return (
        <Layout>

        </Layout>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllBeerIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
}



// import Layout from '../../components/layout'
// import { getAllBeerIds, getBeerData } from '../../lib/posts'
// import Head from 'next/head'

// export async function getStaticProps({ params }) {
//     const beerData = await getBeerData(params.id)
//     return {
//         props: {
//             beerData
//         }
//     }
// }

// export async function getStaticPaths() {
//     const paths = getAllBeerIds()
//     return {
//         paths,
//         fallback: false
//     }
//     // Return a list of possible value for id   
// }

// export default function Beer({ beerData }) {
//     return (

//         <Layout>
//             <Head>
//                 <title>{beerData.title}</title>
//             </Head>
//             <section>
//                 <h1>{beerData.id}</h1>
//             </section>
//             {/* <article>
//                 <h1 className={utilStyles.headingXl}>{beerData.title}</h1>
//                 <div className={utilStyles.lightText}>
//                     <Date dateString={beerData.date} />
//                 </div>
//                 <div dangerouslySetInnerHTML={{ __html: beerData.contentHtml }} />
//             </article> */}
//         </Layout>
//     )
// }