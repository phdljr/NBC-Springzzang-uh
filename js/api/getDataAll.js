export const getDataAll = async () => {
  await fetch(
    `https://firestore.googleapis.com/v1/projects/nbc-springzzang-uh/databases/(default)/documents/members`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};
