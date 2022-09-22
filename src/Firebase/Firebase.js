import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDuNtPV8yVrhovWZPluKrQZkWztkJ0dSS0',
	authDomain: 'jessica-400d2.firebaseapp.com',
	projectId: 'jessica-400d2',
	storageBucket: 'jessica-400d2.appspot.com',
	messagingSenderId: '11530729375',
	appId: '1:11530729375:web:111b0f03826392b2022faa',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const SignUp = createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		const user = userCredential.user;
		console.log(user);
		console.log('Created account and signed in successfully');
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);
	});

const SignIn = signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		const user = userCredential.user;
		console.log(user);
		console.log('Signed in successfully');
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);
	});

const SignOut = signOut(auth)
	.then(() => {
		console.log('Sign out successful');
	})
	.catch((error) => {
		console.timeLog(error);
	});

export { SignUp, SignIn, SignOut };
