import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebases/firebaseConfig";

export default function useSnapshot(tableData, filter, [...condition]) {
  const [dataSnapshot, setDataSnapshot] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  useEffect(() => {
    const colRef = collection(db, tableData);
    const newRef = filter ? query(colRef, ...condition) : colRef;
    onSnapshot(newRef, (snapshot) => {
      setDataCount(snapshot.size);
      let results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setDataSnapshot(results);
    });
  }, [filter]);
  return { dataSnapshot, dataCount };
}
