import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/react';
import {useState} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import axios from 'axios';
import moment from 'moment';
import { BackgroundMode } from '@ionic-native/background-mode';

import './Tab2.css';
const bg = BackgroundMode;
bg.enable();

const Tab2: React.FC = () => {
  const [lat, setLat] = useState('N/A')  
  const [lon, setLon] = useState('N/A')  
  const [time, setTime] = useState('N/A')  
  const saveCoordinates = () => {
    setInterval(function(){
        navigator.geolocation.getCurrentPosition(function(position) {
          let lat:any = position.coords.latitude.toString()
          let long:any = position.coords.longitude.toString()
          let cellphone: any=localStorage.getItem("cellphone")
          let name: any=localStorage.getItem("name")
          let email: any=localStorage.getItem("email")
          let profile: any=localStorage.getItem("profile")
          setLat(lat)
          setLon(long)
          setTime(moment().format('DD-MM-YYYY HH:mm:ss a').toString())
          var formData = new FormData();
          
          formData.append("cellNumber", cellphone);
          formData.append("name", name);
          formData.append("email", email);
          formData.append("profile", profile);
          formData.append("lat", lat);
          formData.append("long", long);
          formData.append("date", moment().format('DD-MM-YYYY'));
          formData.append("time", moment().format('HH:mm:ss a'));
          //formData.append("cellNumber", localStorage.getItem("cellphone"));
          axios.post('https://com-geored.uaa.mx/save', formData).then(response => {             
            setLat(position.coords.latitude.toString())
            setLon(position.coords.longitude.toString())
            setTime(moment().format('DD-MM-YYYY HH:mm:ss a').toString())
            console.log(response);        
          });
          
      });
    }, 1 * 60 * 100);
    
    
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar Captura de Coordenadas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Coordenadas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>Latitud</IonLabel>          
          <IonLabel>{lat}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Longitud</IonLabel>          
          <IonLabel>{lon}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Timestamp</IonLabel>          
          <IonLabel>{time}</IonLabel>
        </IonItem>
        <IonItem>
          <IonButton expand="block" color="primary" onClick={ () => saveCoordinates() } >Guardar</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
