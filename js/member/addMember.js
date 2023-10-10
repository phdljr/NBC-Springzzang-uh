import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "../db.js";

export const addMember = async (data, file) => {
  await addDoc(collection(db, "members"), data);

  const storageRef = ref(storage, data.imageUrl);

  uploadBytes(storageRef, file).then((snapshot) => {
    alert("저장 완료!");
    window.location.reload();
  });
};
