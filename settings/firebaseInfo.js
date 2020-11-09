// Initialize Firebase
var config = {
	apiKey: "AIzaSyDdv5bK17ATM3jXuiG-_yhINi4lt6mEo6g",
    authDomain: "foodcoast-5cf5d.firebaseapp.com",
    databaseURL: "https://foodcoast-5cf5d.firebaseio.com",
    projectId: "foodcoast-5cf5d",
    storageBucket: "foodcoast-5cf5d.appspot.com",
    messagingSenderId: "536048408038",
    appId: "1:536048408038:web:d477e11c111d28d1e73227"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();