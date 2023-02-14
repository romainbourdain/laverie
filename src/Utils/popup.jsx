import { useDateContext } from "../Contexts/DateContext"
import { useDisplayContext } from "../Contexts/DisplayContext";

export const OpenPopup = (date) => {
  const {setSelectedDate} = useDateContext();
  const {setPopup} = useDisplayContext();
  setSelectedDate(date);
  setPopup(true);
}