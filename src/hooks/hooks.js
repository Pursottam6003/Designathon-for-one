import { useState, useEffect } from "react";
import { reauth, fs, db } from "../config/config";
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore'

function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    reauth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(user);
        fs.collection('users').doc(user.uid).get()
          .then(snapshot => {
            if (snapshot.exists && snapshot.data().Role === 'admin') {
              setAdmin(true);
            }
          }).then(() => {setCheckingStatus(false)});
      }
      else setCheckingStatus(false);
    })
  }, []);

  return { loggedIn, checkingStatus, admin };
}


/** 
 * Get submissions from firestore
 * @param {string} collectionName
 * @param {Array} filter
 */
function useGetSubmissions(collectionName, filter=[]) {
  const [fetching, setFetching] = useState(true);
  const [docs, setDocs] = useState({});
  
  useEffect(() => {
    const q = query(collection(db, collectionName), orderBy('createdInSeconds', 'desc'), ...filter);

    const unsubscribe = onSnapshot(q, snapshot => {
      const ls = {};

      snapshot.forEach(doc => {
        ls[doc.id] = { ...doc.data(), id: doc.id };
      });
      const ls_l = ls;
      setDocs(ls_l);
      setFetching(false);
    })

    return () => unsubscribe();
  }, []);

  return { docs, setDocs, fetching };
}



export { useAuthStatus, useGetSubmissions };