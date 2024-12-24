import styles from "./AppData.module.css";
import { MdDelete } from "react-icons/md";
function AppData(props) {
  return (
    <div className={`${styles["margin-total"]} row`}>
      <div className="col-6">
        <p className={styles["text-total"]}>{props.name}</p>
      </div>
      <div className="col-4">
        <p className={styles["text-total"]}>{props.date}</p>
      </div>
      <div className="col-2">
        <button
          type="button"
          className={`${styles["width-total"]} btn btn-danger`}
          onClick={() => props.onDeleteTodo(props.name)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default AppData;
