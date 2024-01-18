import { useRouter } from "next/router";
import styles from "./TopBar.module.scss";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import SmallMenu from "./SmallMenu/SmallMenu";

const TopBar = () => {
    const router = useRouter();
    const { width } = useWindowSize();

    return (
        width > 820 ? (
            <div className={styles.TopBar}>
                <div className={styles.links}>
                    <Link
                        href='/'
                        className={[styles.link, router?.asPath == '/' ? styles.activeLink : ''].join(' ')}
                    >Home</Link>
                </div>
            </div>
        ) : (<SmallMenu />)
    );
};

export default TopBar;
