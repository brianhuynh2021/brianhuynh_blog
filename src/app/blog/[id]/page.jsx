import React from "react";
import styles from "./page.module.css"
import Image from "next/image"

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-cache"
    })

    if (!res.ok) {
        return notFound
    }

    return res.json()
}

const BlogPost = async ({params}) => {
    const data = await getData(params.id)
    return (
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.info}>
                <h1 className={styles.title}>
                    {data.title}
                </h1>
                <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className={styles.author}>
                    <Image 
                        src="https://images.pexels.com/photos/28248795/pexels-photo-28248795/free-photo-of-elma-kurutma.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.avatar}
                    />
                    <span className={styles.username}>Brian Huynh</span>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image 
									src="https://images.pexels.com/photos/20452012/pexels-photo-20452012/free-photo-of-woman-sitting-in-traditional-clothing-and-with-painting-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt=""
									fill={true}
									className={styles.image}
								/>
            </div>
          </div>
					<div className={styles.content}>
						<p className={styles.text}>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non <br/>
						provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis 
						<br/>est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis 
						<br/>aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias 
						consequatur aut perferendis doloribus asperiores repellat.
						</p>
					</div>
        </div>
    );
};

export default BlogPost;