import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css"

export default function NavBar(){
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/logo.png" width="52" height="52" alt="Cinéfilo"/>
                <h1>Cinéfilo</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}