import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import cardStyles from '../styles/card.module.scss'
import getGetData, { updateQuantity, apiUrl } from '../lib/beers'
import React from 'react'

//apiUrl needs to be stored in State so 

export async function getStaticProps() {
  let allBeers = await getGetData(apiUrl)
  return {
    props: {
      allBeers
    }
  }
}

export default function Home({ allBeers }) {

  // let query = ""

  // const onChange = ((event) => {
  //   console.log(event.target.value)
  //   query = event.target.value;
  //   console.log('Change', query);
  // })

  // const resetFilter = ((event) => {
  //   event.target.value = ""
  //   console.log('Reset', query)
  // })

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>

        {/* <section>
          
        </section> */}

        {/* Customise the amount of records */}
        <section>
          <form>
            <label htmlFor="recordsQuantity">How many records would you like to view? (Default is 25)</label><br />
            <input id="recordsQuantity" name="recordsQuantity" type="number" placeholder="" />
            <button onClick={updateQuantity({ apiUrl })}>Update Records</button>
          </form>

          {/* Search data for keyword */}
          <form>
            <label htmlFor="recordsQuantity">Search the records for a keyword:</label><br />
            <input type="text" onChange={event => setFilter(event.target.value)} placeholder="Search beers" />
            <button>Reset Filter</button>
          </form>

          {/* Sort records */}
          <div>
            <label htmlFor="sortData">Sort the records:</label><br />
            <select name="sortData" id="sortData">
              <option value="sortId">Default (By ID)</option>
              <option value="sortAvbAscending">ABV (Ascending)</option>
              <option value="sortAvbDescending">AVB (Descending)</option>
            </select>
          </div>
        </section>

        <section>
          <ul className={cardStyles.cards}>
            {allBeers.map(({ name, tagline, description, image_url, abv }) => (
              <li className={cardStyles.card} key={name}>
                {/* <Link href={`/beers/${id}`}> */}
                <div className={cardStyles.card__imageHolder}>
                  <Link href="#">
                    <a><img src={process.env.PUBLIC_URL, `${image_url}`} className={cardStyles.card__image} /></a>
                  </Link>
                </div>
                <div className={cardStyles.card__info}>
                  <div className={cardStyles.card__header}>
                    <h2>{name}</h2>
                    <small>ABV: {abv}%</small>
                  </div>
                  <h3 className={cardStyles.card__tagline}>{tagline}</h3>
                  <p className={cardStyles.card__description}>
                    {description.substring(0, 100)} <Link href="#"><a>Read more...</a></Link>
                  </p>
                  <button className={cardStyles.card__button}>VIEW PRODUCT</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout >
  );
}