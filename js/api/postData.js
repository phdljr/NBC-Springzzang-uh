export const postData = async (data) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const idToken = user.idToken;
  
  await fetch(
    `https://firestore.googleapis.com/v1/projects/nbc-springzzang-uh/databases/(default)/documents/members`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        fields: {
          position: {
            stringValue: "test_position"
          },
          name: {
            stringValue: "test_name"
          },
          imageUrl: {
            stringValue: "imageUrl"
          },
          info_mbti: {
            stringValue: "info_mbti"
          },
          advantage: {
            stringValue: "advantage"
          },
          codingStyle: {
            stringValue: "codingStyle"
          },
          teamFeature_Goal: {
            stringValue: "teamFeature_Goal"
          },
          teamPromise: {
            stringValue: "teamPromise"
          },
          blogUrl: {
            stringValue: "blogUrl"
          },
        }
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        console.log(response.json());
        throw new Error("데이터 추가 실패");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      alert("데이터 추가 성공");
    })
    .catch((error) => alert("데이터 추가 실패"));
};
