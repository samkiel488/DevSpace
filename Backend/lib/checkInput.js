export default async function checkInput({ field: { name, value }, res }) {
  if (value === undefined || value === null || value.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: `Please enter a ${name}` });
    return true;
  }
  return false;
}
