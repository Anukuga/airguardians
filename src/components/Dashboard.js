import Donut from "./Donut";
import styles from "../styles/dashboard.module.css";


const Dashboard = ({ humidity, airQuality }) => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <Donut entity={"Humidity"} data={humidity} />
      </div>
      <div>
        <Donut entity={"AQI"} data={airQuality} />
      </div>
    </div>
  );
};

export default Dashboard;
