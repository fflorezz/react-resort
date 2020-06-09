export function formatContentfullData(items) {
  const tempItems = items.map((item) => {
    const id = item.sys.id;
    const images = item.fields.images.map((image) => image.fields.file.url);
    const room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
}
