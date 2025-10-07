import { toast } from "react-toastify";
export default async function copyToClipboard({ path }) {
  try {
    await navigator.clipboard.writeText(`${window.location.origin}/${path}`);
    return toast.success("Link copied successfully");
  } catch (err) {
    console.log(err);
    return toast.error("Unable to copy link");
  }
}
