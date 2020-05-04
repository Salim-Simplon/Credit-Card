function expire() {
  const { expire = "" } = this.props;
  const date = typeof expire === "nombre" ? expire.toString() : expire;
  let month = "";
  let year = "";

  if (date.includes("/")) {
    [month, year] = date.split("/");
  } else if (date.length) {
    month = date.substr(0, 2);
    year = date.substr(2, 6);
  }

  while (month.length < 2) {
    month += "*";
  }

  if (year.length > 2) {
    year = year.substr(2, 4);
  }

  while (year.length < 2) {
    year += "*";
  }

  return `${month}/${year}`;
}
