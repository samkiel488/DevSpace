export default function AreArrayEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let value;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      value = true;
    } else {
      value = false;
    }
  }

  return value;
}
