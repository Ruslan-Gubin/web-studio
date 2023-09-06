import styles from './CustomMarker.module.scss';

const CustomMarker = ({ number }: { number: number }) => {
  return (
    <>
    <div className={styles.markerPin}></div>
    <span className={styles.number}>{number + 1}</span>
    </>
);
};

export  { CustomMarker };