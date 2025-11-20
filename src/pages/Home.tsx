import React, { useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
} from '@ionic/react';

const Home: React.FC = () => {
    const [quetzales, setQuetzales] = useState<number | null>(null);
    const [dolares, setDolares] = useState<number | null>(null);

    const TASA = 8; // 1 USD = 8 GTQ

    const convertir = () => {
        if (quetzales === null || isNaN(quetzales)) {
            setDolares(null);
            return;
        }

        const resultado = quetzales / TASA;

        // redondeo a 2 decimales
        const redondeado = Math.round((resultado + Number.EPSILON) * 100) / 100;

        setDolares(redondeado);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>DivisApp_21007055</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <h2>Conversor de Quetzales a Dólares</h2>

                <IonItem>
                    <IonLabel position="floating">Cantidad en Quetzales (GTQ)</IonLabel>
                    <IonInput
                        type="number"
                        value={quetzales ?? ''}
                        onIonInput={(e: any) => setQuetzales(Number(e.target.value))}
                    />
                </IonItem>

                <div style={{ marginTop: 16 }}>
                    <IonButton expand="block" onClick={convertir}>
                        Convertir
                    </IonButton>
                </div>

                {dolares !== null && (
                    <IonCard style={{ marginTop: 20 }}>
                        <IonCardHeader>
                            <IonCardTitle>Resultado</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <p>{quetzales} GTQ equivalen a:</p>
                            <h2>{dolares} USD</h2>
                            <small>Tasa usada: 1 USD = 8 GTQ</small>
                        </IonCardContent>
                    </IonCard>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Home;
