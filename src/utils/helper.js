export function filterData(searchText, restaurants) {

  const response = restaurants.filter(
    (restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()) // search for the data which includes the applicable data
  );
 console.log(response);
  return response;

  // return restaurants.filter(
  //   (restaurant) =>
  //     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()) // search for the data which includes the applicable data
  // );
}
