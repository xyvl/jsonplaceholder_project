import styles from "./tabulation.module.scss";

interface IProps {
  value: number;
  numberElement: number;
  setValue: (value: number) => void;
}

const Tabulation = ({ value, setValue, numberElement }: IProps) => {
  const arr: number[] = [];
  for (let i = 1; i < numberElement + 1; i++) {
    arr.push(i);
  }

  return (
    <div className="wrapper">
      <div className={styles.main}>
        {arr.map((el) => (
          <div
            onClick={() => setValue(el)}
            key={el}
            className={`${styles.block} ${value === el && `${styles.active}`}`}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabulation;
