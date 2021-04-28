import React from "react";
import { IonRow, IonCol, IonIcon, IonButton } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BmiBtns: React.FC<{ onCalc: () => void;  onReset: () => void }> = (
  props
) => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={props.onCalc}>
          <IonIcon icon={calculatorOutline} slot="start" />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton onClick={props.onReset}>
          <IonIcon icon={refreshOutline} slot="start" />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiBtns;
