import styles from "./DefaultLayout.module.scss";
import TopBar from "@/components/TopBar/TopBar";
import useWindowSize from "@/hooks/useWindowSize";

const DefaultLayout = ({ children }) => {
    const { width, height } = useWindowSize();
    
    return (
        <div className={styles.DefaultLayout}>
            <div className={styles.topBarAndContent}>
                <TopBar />
                {/* <div className="separator-two"></div> */}
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
