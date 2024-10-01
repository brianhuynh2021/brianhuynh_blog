import React from "react"
import styles from './page.module.css'
import Link from "next/link"
import Image from "next/image"

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: "no-cache"
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


const Blog = async () => {
    const data = await getData()
    return (
        <div className={styles.mainContainer}>
            <Link href="/blog/blogID" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/20542478/pexels-photo-20542478/free-photo-of-elderly-woman-in-traditional-clothing-walking-with-backpack.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
            <Link href="/blog/blogID" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/20542478/pexels-photo-20542478/free-photo-of-elderly-woman-in-traditional-clothing-walking-with-backpack.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
            <Link href="/blog/blogID" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/20542478/pexels-photo-20542478/free-photo-of-elderly-woman-in-traditional-clothing-walking-with-backpack.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
        </div>
    );
}

export default Blog;