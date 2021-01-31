import cardStyles from '../styles/card.module.scss'
import { getBeerData } from '../lib/beers'

export async function getStaticProps() {
  const allBeers = await getBeerData()
  return {
    props: {
      allBeers
    }
  }
}


export default function Home({ allBeers }) {

  let query = ""

  const onChange = ((event) => {
    console.log(event.target.value)
    query = event.target.value;
    console.log('Change', query);
  })

  const resetFilter = ((event) => {
    event.target.value = ""
    console.log('Reset', query)
  })



  return (
    <div>

      <section>
        <input type="text" placeholder="Search beers" onChange={onChange} />
        <button onClick={resetFilter}>Reset Filter</button>
      </section>

      <section>
        <ul className={cardStyles.cards}>
          {allBeers.map(({ name, tagline, description, image_url, abv }) => (
            <li className={cardStyles.card} key={name}>
              {/* <Link href={`/beers/${id}`}> */}
              <a><img src={process.env.PUBLIC_URL, `${image_url}`} className={cardStyles.card__image} /></a>
              {/* </Link> */}
              <h1>{name}</h1>
              <h2>{tagline}</h2>
              <small>{abv}</small>
              <p>
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}