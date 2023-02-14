import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = {
  buttonPrev: <FontAwesomeIcon icon={faChevronLeft} />,
  buttonNext: <FontAwesomeIcon icon={faChevronRight} />,
  downList: <FontAwesomeIcon icon={faChevronDown} />,
  plusIcon: <FontAwesomeIcon icon={faCirclePlus} />,
};

export default icons;
