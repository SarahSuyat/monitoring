import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonItem,
IonLabel,
IonInput,
IonButton
} from '@ionic/react';

import { useState } from "react";
import { supabase } from "../supabaseClient";

const AddMonitoring: React.FC = () => {

const [name,setName] = useState("");
const [training,setTraining] = useState("");
const [status,setStatus] = useState("");

const saveData = async () => {

await supabase
.from("monitoring")
.insert([
{
trainee_name: name,
training: training,
status: status
}
]);

alert("Monitoring Saved");

}

return(

<IonPage>

<IonHeader>
<IonToolbar>
<IonTitle>Add Monitoring</IonTitle>
</IonToolbar>
</IonHeader>

<IonContent className="ion-padding">

<IonItem>
<IonLabel position="stacked">Trainee Name</IonLabel>
<IonInput onIonChange={(e)=>setName(e.detail.value!)} />
</IonItem>

<IonItem>
<IonLabel position="stacked">Training</IonLabel>
<IonInput onIonChange={(e)=>setTraining(e.detail.value!)} />
</IonItem>

<IonItem>
<IonLabel position="stacked">Status</IonLabel>
<IonInput onIonChange={(e)=>setStatus(e.detail.value!)} />
</IonItem>

<IonButton expand="block" onClick={saveData}>
Save
</IonButton>

</IonContent>

</IonPage>

);
}

export default AddMonitoring;