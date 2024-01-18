import { MoonLoader } from 'react-spinners';
import styles from './PageLoading.module.scss';

const PageLoading = () => {
  return (
    <div className={styles.PageLoading}>
        <MoonLoader />
    </div>
  )
}

export default PageLoading;