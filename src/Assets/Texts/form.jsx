import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const form = {
    title: "Réserver",
    firstnameInput: "Prénom",
    lastnameInput: "Nom",
    promoInput: {
        title: "Promo",
        options: [
            "1A",
            "1A BS",
            "2A",
            "2A BS",
            "3A",
            "3A BS",
        ]
    },
    dayInput: "Choisir un jour",
    hourInput: "Choisir une heure",
    malInput: "Machine à laver",
    slInput: "Sèche-linge",
    submitBtn: "Réserver",
    closeIcon: <FontAwesomeIcon icon={faXmark} />
}

export default form;