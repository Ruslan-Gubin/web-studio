import styles from "./PopapContent.module.scss";

interface Props {
  company_name?: string;
  sity?: string;
  street?: string;
  house?: string;
  phone?: string[];
  email?: string;
};

const PopapContent = ({
  company_name,
  house,
  phone,
  sity,
  street,
  email,
}: Props) => {
  return (
    <>
      {company_name && <h3 className={styles.popupTitle}>{company_name}</h3>}
      <div className={styles.popupInfo}>
        {sity && (
          <label className={styles.popupLabel}>
            Город:
            <span> {sity}</span>
          </label>
        )}
        {street && (
          <label className={styles.popupLabel}>
            Улица:
            <span> {street}</span>
          </label>
        )}
        {house && (
          <label className={styles.popupLabel}>
            Дом:
            <span> {house ? house : ""}</span>
          </label>
        )}
        <ul>
          {phone &&
            phone.length > 0 &&
            phone.map((phone) => (
              <li key={phone}>
                <label className={styles.popupLabel}>
                  Тел:
                  <span> {phone}</span>
                </label>
              </li>
            ))}
        </ul>
        {email && <span className={styles.email}>{email}</span>}
      </div>
    </>
  );
};

export { PopapContent };
