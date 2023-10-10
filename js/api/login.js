import { firebaseConfig } from "../config.js";

export const loginRequest = async (email, password) => {
  await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("로그인 실패");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(data));
      alert("로그인 성공!");
    })
    .catch(() => alert("로그인에 실패했습니다."));
};
