import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, createContext, useContext, useState } from "react";
import { auth, db } from "../firebases/firebaseConfig";

const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);
  useEffect(() => {
    async function fetchUserData() {
      const colRef = collection(db, "users");
      const q = query(colRef, where("email", "==", userInfo.email));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPersonalInfo(result[0]);
    }
    fetchUserData();
  }, [userInfo]);
  const value = { userInfo, setUserInfo, personalInfo };
  return <AuthContext.Provider {...props} value={value}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
