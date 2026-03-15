import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent
} from '@ionic/react';

const Dashboard: React.FC = () => {

return (

<IonPage>

<IonHeader>
<IonToolbar>
<IonTitle>Monitoring Dashboard</IonTitle>
</IonToolbar>
</IonHeader>

<IonContent className="ion-padding">

<h2>Monitoring Information System</h2>

<p>Welcome to the Monitoring Dashboard</p>

</IonContent>

</IonPage>

);
}

export default Dashboard;