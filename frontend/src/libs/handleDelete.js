export default function handleDelete(index, setArray, array) {
  setArray((prev) => {
    return prev.filter((tools) => {
      return tools !== array[index];
    });
  });
}
