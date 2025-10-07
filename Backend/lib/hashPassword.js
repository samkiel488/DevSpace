import bcrypt from "bcryptjs";
export default async function HashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}
