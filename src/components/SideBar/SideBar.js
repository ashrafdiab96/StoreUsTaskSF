import { useRouter } from "next/router";
import styles from "./SideBar.module.scss";

const data = [
    { name: "Home", url: "/admin-panel" },
    { name: "Books", url: "/admin-panel/books" },
];

const SideBar = () => {
    const router = useRouter();
    
    return (
        <div className={styles.SideBar}>
            <div className={styles.buttons}>
                {data?.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={[styles.button, router.asPath == item.url ? styles.buttonActive : ''].join(' ')}
                            onClick={() => router.push(item.url)}
                        >
                            {item?.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SideBar;
