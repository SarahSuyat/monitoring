import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle
} from '@ionic/react';

const Menu: React.FC = () => {

  return (

    <IonMenu contentId="main">

      <IonContent>

        <IonList>

          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/dashboard">
              <IonLabel>Dashboard</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/monitoring">
              <IonLabel>Monitoring List</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/add-monitoring">
              <IonLabel>Add Monitoring</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/reports">
              <IonLabel>Reports</IonLabel>
            </IonItem>
          </IonMenuToggle>

        </IonList>

      </IonContent>

    </IonMenu>

  );

}

export default Menu;