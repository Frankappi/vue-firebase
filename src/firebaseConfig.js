import firebase from "firebase";

// Firebase config
const configOptions = {
	apiKey: "AIzaSyBllSoUjaWmnF230c8iJVV6vRbIKSV3MfA",
	authDomain: "vuefirebase-app-97d4f.firebaseapp.com",
	databaseURL: "https://vuefirebase-app-97d4f.firebaseio.com",
	projectId: "vuefirebase-app-97d4f",
	storageBucket: "vuefirebase-app-97d4f.appspot.com",
	messagingSenderId: "319772498240",
	appId: "1:319772498240:web:b4a259008f4d2529"
}

export default firebase.initializeApp(configOptions);