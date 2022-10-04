import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebases/firebaseConfig";

export default function useFetchData(tableData, [...condition]) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const colRef = collection(db, tableData);
      const q = query(colRef, ...condition);
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setData(result);
    }
    getData();
  }, []);
  return { data, setData };
}
