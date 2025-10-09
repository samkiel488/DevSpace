import { toast } from "react-toastify";
export default async function handlePictureUpload({ image, url, placeholder }) {
  const formData = new FormData();
  formData.append(`${placeholder}`, image);

  try {
    const request = await fetch(`${url}`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    const data = await request.json();
    console.log(data);

    if (data.success) {
      toast.success(data.message);
      window.location.reload();
    }
    toast.error(data.error);
  } catch (err) {
    console.log(err);
  }
}
