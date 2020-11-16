export default interface IForm {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  name?: string
}