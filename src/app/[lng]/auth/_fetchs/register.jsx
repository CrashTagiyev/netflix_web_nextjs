export const register = async (formData) => {
  try {
      console.log(formData)
    const response = await fetch("http://localhost:5001/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (err) {}
};
