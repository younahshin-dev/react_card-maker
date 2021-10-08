import firebaseApp from "./firebase"
import firebase from "firebase"
class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }    

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => onUserChanged(user));
    }

    logout() {
        firebaseApp.auth().signOut();
    }
}

export default AuthService;