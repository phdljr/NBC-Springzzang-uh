import { deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { deleteObject, ref } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "../db.js";

export const deleteMember = async (id, imageUrl) => {
    if (confirm("삭제하시겠습니까?")) {
        // 데이터 삭제
        await deleteDoc(doc(db, "members", id));
        // 사진 삭제
        deleteObject(ref(storage, imageUrl)).then(() => {
            alert("삭제 완료");
            window.location.reload();
        }).catch((error) => {
            alert("삭제에 실패했습니다.");
            console.log(error);
        });
    }
}