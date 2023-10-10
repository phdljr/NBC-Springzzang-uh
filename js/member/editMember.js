import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "../db.js";

export const editMember = async (memberId, data, file, cardPassword) => {
    if (data.cardPassword != cardPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    if (file !== undefined) {
        data.imageUrl = file.name;

        await updateDoc(doc(db, "members", memberId), data);

        uploadBytes(ref(storage, data.imageUrl), file).then((snapshot) => {
            alert("수정 완료!");
            window.location.href = "index.html";
        });
    } else {
        await updateDoc(doc(db, "members", memberId), data);

        alert("수정 완료");
        window.location.href = "index.html";
    }
}