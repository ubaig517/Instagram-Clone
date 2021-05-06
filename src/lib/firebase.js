import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCfmzQkQdoYdKu3_VdbbwLlCw0QUBSsZWE',
  authDomain: 'instagram-6846e.firebaseapp.com',
  projectId: 'instagram-6846e',
  storageBucket: 'instagram-6846e.appspot.com',
  messagingSenderId: '761088163168',
  appId: '1:761088163168:web:6a17250b704522b431f205'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };
