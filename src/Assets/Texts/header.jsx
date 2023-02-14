import { faChevronLeft, faChevronRight, faChevronDown, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const header = {
    todayBtn: "Aujourd'hui",
    prevMonthBtn: <FontAwesomeIcon icon={faChevronLeft} />,
    nextMonthBtn: <FontAwesomeIcon icon={faChevronRight} />,
    displayBtn: {
        title: "Mois",
        icon: <FontAwesomeIcon icon={faChevronDown} />   
    },
    formBtn: {
        title: "Réserver",
        icon: <FontAwesomeIcon icon={faCirclePlus} />
    }
  };

  export default header;