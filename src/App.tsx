import React, { useRef, useState } from "react";
import BmiBtns from "./components/BmiBtns";
import BmiResult from "./components/BmiResult";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonButton,
  IonGrid,
  IonCard,
  IonCardContent,
  IonAlert,
} from "@ionic/react";

import { calculatorOutline, refreshOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [result, setResult] = useState<Number>(0);
  const [error, setError] = useState<Boolean>(false);

  const weightInpRef = useRef<HTMLIonInputElement>(null);
  const heightInpRef = useRef<HTMLIonInputElement>(null);

  const calcBmi = () => {
    const enteredWeight = weightInpRef.current!.value;
    // by default typescrpt adds ? here as a short form of
    // ternary operator to check if the value is null or not
    // but in our case btn will only be click when there will
    // be some value hence ! will never be null it can be empty string
    // but never null
    // And + to conv string to int
    const enteredHeight = weightInpRef.current!.value;

    // checking if they are not null
    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError(true)
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    setResult(bmi);
  };
  const resetInp = () => {
    weightInpRef.current!.value = "";
    heightInpRef.current!.value = "";
  };

  return (
    <>
    <IonAlert
      isOpen = {!!error}   //!! converts to boolean
      message = "Please enter a valid (non-negative) input number."
      buttons = {[{
        text : 'Okay',
        handler : () => setError(false)
      }]}
    />
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Height</IonLabel>
                <IonInput ref={heightInpRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Weight</IonLabel>
                <IonInput ref={weightInpRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <BmiBtns onCalc={calcBmi} onReset={resetInp} />
          <BmiResult result={result} />
        </IonGrid>
      </IonContent>
    </IonApp>
    </>
  );
};

export default App;
