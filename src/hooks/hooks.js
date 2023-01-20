import { useState, useEffect } from "react";
import { reauth, fs } from "../config/config";

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
          })
      };
      setCheckingStatus(false);
    })
  }, []);

  return { loggedIn, checkingStatus, admin };
}

export { useAuthStatus };