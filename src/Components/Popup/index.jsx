import React, { createRef, useRef } from "react";
import texts from "../../Assets/Texts";
import { useDisplayContext } from "../../Contexts/DisplayContext";
import { PrimaryButton, TransparentButton } from "../Button";
import { Checkbox, DateInput, SelectInput, TextInput } from "../Inputs";
import {
  FlexContainer,
  PopupContainer,
  PopupWindow,
  StyledForm,
  TitleContainer,
} from "./style";

const Popup = ({ date }) => {
  const { popup, setPopup } = useDisplayContext();

  const defaultResult = {
    firstname: "",
    lastname: "",
    promo: "1A",
    mal: false,
    sl: false,
  };

  const [result, setResult] = React.useState({ ...defaultResult });

  return (
    <PopupContainer
      display={popup.toString()}
      id="bg"
      onClick={(e) => {
        if (e.target.id === "bg") setPopup(false);
      }}
    >
      <PopupWindow display={popup.toString()}>
        {popup && (
          <StyledForm
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              console.log(result);
              // setPopup(false);
              // setResult({ ...defaultResult });
            }}
          >
            <TitleContainer>
              <h1>{texts.form.title}</h1>
              <TransparentButton
                onClick={(e) => {
                  e.preventDefault();
                  setPopup(false);
                }}
              >
                {texts.form.closeIcon}
              </TransparentButton>
            </TitleContainer>
            <FlexContainer>
              <TextInput
                id="lastname"
                title={texts.form.lastnameInput}
                value={result.lastname}
                onChange={(e) =>
                  setResult({ ...result, lastname: e.target.value })
                }
              />
              <TextInput
                id="firstname"
                title={texts.form.firstnameInput}
                value={result.firstname}
                onChange={(e) =>
                  setResult({ ...result, firstname: e.target.value })
                }
              />
            </FlexContainer>
            <SelectInput
              id="promo"
              title={texts.form.promoInput.title}
              value={result.promo}
              onChange={(e) => setResult({ ...result, promo: e.target.value })}
            >
              {texts.form.promoInput.options.map((optn, id) => (
                <option key={id} value={optn}>
                  {optn}
                </option>
              ))}
            </SelectInput>
            <DateInput id="day-selection" title="Choisir un jour" date={date} />
            <FlexContainer>
              <Checkbox
                id="mal"
                title={texts.form.malInput}
                checked={result.mal}
                onChange={(e) => setResult({ ...result, mal: e.target.value })}
              />
              <Checkbox
                id="sl"
                title={texts.form.slInput}
                value={result.sl}
                onChange={(e) => setResult({ ...result, sl: e.target.value })}
              />
            </FlexContainer>
            <PrimaryButton type="submit">{texts.form.submitBtn}</PrimaryButton>
          </StyledForm>
        )}
      </PopupWindow>
    </PopupContainer>
  );
};

export default Popup;
