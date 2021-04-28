import React from "react";

import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const BmiResult: React.FC <{result : Number}> = (props) => {
  return (
    <IonRow>
      <IonCol>
        {props.result > 0 ? (
          <>
            <h2>Result</h2>
            <IonCard>
              <IonCardContent>
                <h2>{props.result}</h2>
              </IonCardContent>
            </IonCard>
          </>
        ) : null}
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
