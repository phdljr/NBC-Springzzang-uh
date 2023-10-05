// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js"
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js'
import { firebaseConfig } from "./config.js"

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);