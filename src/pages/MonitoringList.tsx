import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonList,
IonItem,
IonLabel
} from '@ionic/react';

import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const MonitoringList: React.FC = () => {

const [data,setData] = useState<any[]>([]);

useEffect(()=>{

fetchData();

},[]);

const fetchData = async () => {

const { data } = await supabase
.from("monitoring")
.select("*");

if(data) setData(data);

};

return(

<IonPage>

<IonHeader>
<IonToolbar>
<IonTitle>Monitoring List</IonTitle>
</IonToolbar>
</IonHeader>

<IonContent>

<IonList>

{data.map((item)=>(

<IonItem key={item.id}>
<IonLabel>

<h2>{item.trainee_name}</h2>
<p>{item.training}</p>
<p>{item.status}</p>

</IonLabel>
</IonItem>

))}

</IonList>

</IonContent>

</IonPage>

);
}

export default MonitoringList;