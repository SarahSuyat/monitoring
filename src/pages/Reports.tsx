import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent
} from '@ionic/react';

const Reports: React.FC = () => {

return(

<IonPage>

<IonHeader>
<IonToolbar>
<IonTitle>Reports</IonTitle>
</IonToolbar>
</IonHeader>

<IonContent className="ion-padding">

<h2>Monitoring Reports</h2>

</IonContent>

</IonPage>

);
}

export default Reports;