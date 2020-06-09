export function filterRooms(filters, rooms) {
  let { type, capacity, price, minSize, maxSize } = filters;
  let tempRooms = [...rooms];
  capacity = parseInt(capacity);
  price = parseInt(price);
  minSize = parseInt(minSize);
  maxSize = parseInt(maxSize);

  if (type !== "todas") {
    tempRooms = tempRooms.filter((room) => room.type === type);
  }
  if (capacity !== 1) {
    tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
  }
  // filter by price
  tempRooms = tempRooms.filter((room) => room.price <= price);
  // filter by size
  tempRooms = tempRooms.filter(
    (room) => minSize <= room.size && room.size <= maxSize
  );

  return tempRooms;
}
