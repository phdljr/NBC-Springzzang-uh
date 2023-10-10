export const getData = async (id) => {
  await fetch(
    `https://firestore.googleapis.com/v1/projects/nbc-springzzang-uh/databases/(default)/documents/members/${id}`,
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
