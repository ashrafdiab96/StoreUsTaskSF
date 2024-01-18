import styles from "./AdminTopBar.module.scss";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/store";
import MenuIcon from "../UI/icons/MenuIcon";
import ArrowRightIcon from "../UI/icons/ArrowRightIcon";
import { logoutThunk } from "@/redux/thunks/authThunks";
import { useRouter } from "next/router";

const AdminTopBar = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    
    const { user } = useSelector((state) => state.auth);
  
    const handleLogout = async () => {
        await dispatch(logoutThunk());
        router.replace('/login');
    };

    return (
        <div className={styles.TopBar}>
            <IconButton className={styles.menuButton}>
                <MenuIcon className={styles.menuIcon} />
            </IconButton>
            
            <button className={styles.user} onClick={handleLogout}>
                <div>
                    <h3>{user?.name || ''}</h3>
                    <p>Manager</p>
                </div>
                <ArrowRightIcon />
            </button>
        </div>
    );
};

export default AdminTopBar;
