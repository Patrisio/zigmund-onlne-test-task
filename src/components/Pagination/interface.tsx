export default interface IPagination {
  totalItems: number,
  itemsPerPage: number,
  paginate: (arg0: number) => void
}