import PropTypes from "prop-types";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length)
    return <Message message="Add your city by clicking on a city on the map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      // Add other city properties if needed
    })
  ),
  isLoading: PropTypes.bool,
};

export default CityList;
