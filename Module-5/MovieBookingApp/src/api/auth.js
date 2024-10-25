const URL = "http://localhost:3000/mba/api/v1/auth/signin";

export const userLogin = async (data) => {
  console.log(`making a POST request to ${data.userId} and ${data.password}`);
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
