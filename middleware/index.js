export default ({ store }) => {
  store.dispatch("banks/listen");
  store.dispatch("branches/listen");
}
