import React from "react";
import Image from "next/image";
import styles from "./page.module.css"
import Button from "../components/Button/Button"

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    src="https://images.pexels.com/photos/28345127/pexels-photo-28345127/free-photo-of-a-table-with-a-menu-on-it-in-a-restaurant.jpeg" 
                    fill={true} 
                    alt="About image cover"
					className={styles.img}
                />
            </div>
            <div className={styles.textImage}>
							<h1 className={styles.imgTitle}>Digital storytellers</h1>
							<h2 className={styles.imgDesc}>
								Handcrafting award winning digital experiences
							</h2>
						</div>
						<div>
							<div>
								<h1 className={styles.title}>Who Are We?</h1>
								<p className={styles.desc}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
									quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
									suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
									eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
									beatae, a suscipit eos. Animi quibusdam cum omnis officiis
									<br />
									<br />
									voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
									esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
									officiis voluptatum quo ea eveniet?
								</p>
							</div>
							<div>
								<h1 className={styles.title}>What we do?</h1>
								<p className={styles.desc}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
									quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
									suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
									eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
									beatae, a suscipit eos. Animi quibusdam cum omnis officiis
									<br />
									<br />
									voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
									esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
									officiis voluptatum quo ea eveniet?
								</p>
							</div>
							<Button text="Contact" url="/contact"/>
						</div>
        </div>
    );
}

export default About;