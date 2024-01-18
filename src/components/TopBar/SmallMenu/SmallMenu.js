import { useRouter } from "next/router";
import styles from "./SmallMenu.module.scss";
import Link from "next/link";
import MenuIcon from "@/components/UI/icons/MenuIcon";
import { useState } from "react";
import CloseIcom from "@/components/UI/icons/CloseIcom";

const SmallMenu = () => {
    const router = useRouter();
    const [opened, setOpened] = useState(false);

    const openMenu = () => {
        setOpened(true);
    };

    const closeMenu = () => {
        setOpened(false);
    };

    return (
        <div className={[styles.SmTopBar, opened ? styles.opened : ''].join(' ')}>
            {opened ? (
                <CloseIcom onClick={closeMenu} className={styles.icon} />
            ) : (
                <MenuIcon onClick={openMenu} className={styles.icon} />
            )}
            {opened ? (
                <div className={styles.links}>
                    <Link
                        href='/'
                        className={[styles.link, router?.asPath == '/' ? styles.activeLink : ''].join(' ')}
                    >الرئيسية</Link>
                    <Link
                        href='/products'
                        className={[styles.link, router?.asPath == '/products' ? styles.activeLink : ''].join(' ')}
                    >المنتجات</Link>
                    <Link
                        href='/brands'
                        className={[styles.link, router?.asPath == '/brands' ? styles.activeLink : ''].join(' ')}
                    >الماركات</Link>
                    <Link
                        href='/recommended'
                        className={[styles.link, router?.asPath == '/recommended' ? styles.activeLink : ''].join(' ')}
                    >رشح منتج أو ماركة للمقاطعة</Link>
                </div>
            ) : null}
        </div>
    );
};

export default SmallMenu;
