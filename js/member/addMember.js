import { addDoc, collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "../db.js";

export const addMember = async (data, file, commonPassword) => {
  const pwRef = await getDoc(doc(db, "admin", "admin"));
  const pw = pwRef.data().password;
  if (commonPassword != pw) {
    alert("생성 비밀번호가 일치하지 않습니다.");
    return;
  }
  
  await addDoc(collection(db, "members"), data);

  const storageRef = ref(storage, data.imageUrl);

  uploadBytes(storageRef, file).then((snapshot) => {
    alert("저장 완료!");
    window.location.reload();
  });
};
