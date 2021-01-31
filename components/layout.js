import Head from 'next/head'
import styles from './layout.module.scss'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = 'Punk API Sample Website'

export default function Layout({ children, home }) {
    return (
        <div>
            <div>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="decription"
                        content="Query the Brewdog Punk api and display the results"
                    />
                </Head>
                <header className={styles.header}>
                    {home ? (
                        <>
                            <section className={styles.headerBar}>
                                <h1>Home page</h1>
                            </section>
                            {/* <img
                                src="/images/profile.jpeg"
                                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                                alt={name}
                            />
                            <h1 className={utilStyles.heading2XL}>{name}</h1> */}
                        </>
                    ) : (
                            <>
                                <section className={styles.headerBar}>
                                    <h1>Not Home Page</h1>
                                </section>
                                {/* <Link href="/">
                                    <a>
                                        <img
                                            src="/images/profile.jpeg"
                                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                                            alt={name}
                                        />
                                    </a>
                                </Link>
                                <h2 className={utilStyles.headingLg}>
                                    <Link href="/">
                                        <a className={utilStyles.colorInherit}>{name}</a>
                                    </Link>
                                </h2> */}
                            </>
                        )}
                </header>
            </div>
            <div className={styles.container}>
                <main>
                    {children}
                </main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}