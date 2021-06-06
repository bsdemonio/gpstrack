import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
const setStorage = (element:string,key:string) =>{
  if ((element) && (element.length > 0))
  {
    localStorage.setItem(key,element);
  }
  
}
const saveNumber = () => {  
  if (localStorage.getItem('cellphone'))
  {
    alert('Numero guardado !')
  }
  else
  {
    alert('Proporcione un numero valido ! ')
  }

}
const getStorage = (key:string) => {
  if (localStorage.getItem(key))
  {
    return localStorage.getItem(key)
  } 
}
let name = getStorage('name');

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Informacion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Informacion personal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>Celular</IonLabel>
          <IonInput value={getStorage('cellphone')} placeholder="Numero de Celular" onIonChange={e => setStorage(e.detail.value!,'cellphone')}></IonInput>          
        </IonItem>
        <IonItem>
          <IonLabel>Nombre</IonLabel>
          <IonInput value={name} placeholder="Nombre" onIonChange={e => setStorage(e.detail.value!,'name')}></IonInput>          
        </IonItem>
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput value={getStorage('email')} placeholder="Email" onIonChange={e => setStorage(e.detail.value!,'email')}></IonInput>          
        </IonItem>
        <IonItem>
          <IonLabel>Profile</IonLabel>
          <IonInput value={getStorage('profile')} placeholder="Profile" onIonChange={e => setStorage(e.detail.value!,'profile')}></IonInput>          
        </IonItem>
        <IonItem>
          <IonButton expand="block" color="primary" onClick={ () => saveNumber() } >Guardar</IonButton>
        </IonItem>
        

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
