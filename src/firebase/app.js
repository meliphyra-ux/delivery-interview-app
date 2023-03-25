import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  getDoc,
  setDoc,
  getDocs,
  addDoc,
  query,
  where,
  serverTimestamp,
  orderBy
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDiDquEGzO9x47KuiVCvAN26kYrBPsotnk',
  authDomain: 'delivery-test-assignment.firebaseapp.com',
  projectId: 'delivery-test-assignment',
  storageBucket: 'delivery-test-assignment.appspot.com',
  messagingSenderId: '1006674719619',
  appId: '1:1006674719619:web:9a1e40db494c0f32863cb6',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('finished');
};

export const createUserFromAuth0 = async (user) => {
  try {
    if (user) {
      const { email, sub, nickname } = user;
      const userRef = doc(db, 'users', sub);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email,
          nickname,
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPizzas = async () => {
  const arrayOfPizzas = [];
  const querySnapshot = await getDocs(collection(db, "pizza's"));
  querySnapshot.forEach((doc) => arrayOfPizzas.push(doc.data()));
  return arrayOfPizzas;
};

export const submitOrder = async (cart, phoneNumber, email, totalPrice) => {
  const collectionRef = collection(db, 'orders');
  const docRef = await addDoc(collectionRef, {
    order: cart,
    phoneNumber,
    email,
    time: serverTimestamp(),
    totalPrice
  });
  return await getDoc(docRef);
};

export const getOrders = async (userEmail) => {
  try {
    const ordersRef = query(collection(db, 'orders'), orderBy('time', 'desc'), where('email', '==', userEmail));
    const response = await getDocs(ordersRef);
    return response
  } catch (err) {
    console.log(err);
  }
};