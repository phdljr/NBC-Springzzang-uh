import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "../db.js";

export const editMember = async (memberId, data, file) => {
    if (file !== undefined) {
        data.imageUrl = file.name;

        await updateDoc(doc(db, "members", memberId), data);

        uploadBytes(ref(storage, file.name), file).then((snapshot) => {
            alert("수정 완료!");
            window.location.href = "index.html";
        });
    } else {
        await updateDoc(doc(db, "members", memberId), data);

        alert("수정 완료");
        window.location.href = "index.html";
    }
}