export function goToHome(history) {
  history.push("/");
}

export function gotToPokedex(history) {
  history.push("/pokedex");
}

export function goToDetails(history, id) {
  history.push(`/details/${id}`);
}

export function goBack(history) {
  history.goBack();
}
