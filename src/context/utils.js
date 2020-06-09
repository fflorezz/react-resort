// import { FETCH_DATA } from "./roomsContex/roomsTypes";
// import { fetchDataSucces, fetchDataFailure } from "./roomsContex/roomsActions";

// export const fetchData = async (client, dispatch) => {
//   dispatch({ type: FETCH_DATA });
//   try {
//     const response = await client.getEntries({
//       content_type: "resortRoom",
//       order: "sys.createdAt",
//     });
//     const data = response.items;
//     const items = formatContentfullData(data);
//     const rooms = formatRoomsData(items);
//     dispatch(fetchDataSucces(rooms));
//   } catch (error) {
//     dispatch(fetchDataFailure(error));
//   }
// };

// export function formatContentfullData(items) {
//   const tempItems = items.map((item) => {
//     const id = item.sys.id;
//     const images = item.fields.images.map((image) => image.fields.file.url);
//     const room = { ...item.fields, images, id };
//     return room;
//   });
//   return tempItems;
// }

// export function getValuesForOptions(items, value, additional = []) {
//   return [...additional, ...new Set(items.map((item) => item[value]))];
// }

// export function formatRoomsData(rooms) {
//   const featuredRooms = rooms.filter((room) => room.featured);
//   const maxPrice = Math.max(...rooms.map((item) => item.price));
//   const maxSize = Math.max(...rooms.map((item) => item.size));
//   const options = {
//     type: getValuesForOptions(rooms, "type", ["todas"]),
//     capacity: getValuesForOptions(rooms, "capacity"),
//   };

//   return {
//     rooms,
//     featuredRooms,
//     sortedRooms: rooms,
//     maxPrice,
//     maxSize,
//     options,
//   };
// }

// export function filterRooms(filters, rooms) {
//   let { type, capacity, price, minSize, maxSize } = filters;
//   let tempRooms = [...rooms];
//   capacity = parseInt(capacity);
//   price = parseInt(price);
//   minSize = parseInt(minSize);
//   maxSize = parseInt(maxSize);

//   if (type !== "todas") {
//     tempRooms = tempRooms.filter((room) => room.type === type);
//   }
//   if (capacity !== 1) {
//     tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
//   }
//   // filter by price
//   tempRooms = tempRooms.filter((room) => room.price <= price);
//   // filter by size
//   tempRooms = tempRooms.filter(
//     (room) => minSize <= room.size && room.size <= maxSize
//   );

//   return tempRooms;
// }
