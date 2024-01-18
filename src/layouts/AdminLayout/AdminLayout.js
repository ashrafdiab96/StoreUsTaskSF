import { useEffect } from "react";
import SideBar from "@/components/SideBar/SideBar";
import styles from "./AdminLayout.module.scss";
import useWindowSize from "@/hooks/useWindowSize";
import AdminTopBar from "@/components/AdminTopBar/AdminTopBar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AdminLayout = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { access_token } = useSelector(state => state.auth);

    useEffect(() => {
        if (access_token) {
            axios.defaults.headers["Authorization"] = `Bearer ${access_token}`;
        } else {
            router.replace("/login");
        }
    }, [access_token]);

    return (
        <div className={styles.DefaultLayout}>
            <SideBar />
            <div className={styles.topBarAndContent}>
                <AdminTopBar />
                <div className='separator-two'></div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
