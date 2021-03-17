import firebase from "firebase";

// Firebase config
const configOptions = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: ""
}

export default firebase.initializeApp(configOptions);
