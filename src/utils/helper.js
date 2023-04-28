export function filterData(searchText, restaurants) {
  return restaurants.filter(
    (restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()) // search for the data which includes the applicable data
  );
}
