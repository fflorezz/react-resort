import { getValuesForOptions } from "./getValuesForOptions";

export function formatRoomsData(rooms) {
  const featuredRooms = rooms.filter((room) => room.featured);
  const maxPrice = Math.max(...rooms.map((item) => item.price));
  const maxSize = Math.max(...rooms.map((item) => item.size));
  const options = {
    type: getValuesForOptions(rooms, "type", ["todas"]),
    capacity: getValuesForOptions(rooms, "capacity"),
  };

  return {
    rooms,
    featuredRooms,
    sortedRooms: rooms,
    maxPrice,
    maxSize,
    options,
  };
}
