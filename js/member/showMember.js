import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDownloadURL, ref } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "../db.js";

export const showMember = async (memberId) => {
    const docRef = await getDoc(doc(db, "members", memberId));
    const row = docRef.data();

    getDownloadURL(ref(storage, row["imageUrl"]))
        .then((url) => {
            $("#image").attr("src", url);
            $("#name").text(row["name"]);
            $("#position").text(row["position"]);
            $("#info_mbti").text(row["info_mbti"]);
            $("#advantage").text(row["advantage"]);
            $("#codingStyle").text(row["codingStyle"]);
            $("#teamFeature_Goal").text(row["teamFeature_Goal"]);
            $("#teamPromise").text(row["teamPromise"]);
            $("#blogUrl").text(row["blogUrl"]);
            $("#blogUrl-a").attr("href", row["blogUrl"]);
        });
}

