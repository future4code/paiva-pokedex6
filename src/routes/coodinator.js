export function goToHome(history) {
  history.push("/");
}

export function gotToPokedex(history) {
  history.push("/pokedex");
}

export function goToDetails(history, name) {
  history.push(`/details/${name}`);
}

export function goBack(history) {
  history.goBack();
}
