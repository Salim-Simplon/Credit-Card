






/*
name: PropTypes.string.isRequired,
  (
    <div
      className={[
        "rccs__name",
        focused === "name" ? "rccs--focused" : "",
        name ? "rccs--filled" : "",
      ]
        .join(" ")
        .trim()}
    >
      {name || placeholders.name}
    </div>
  );

  function validation(){
    let regName = /^[a-z]+\s?[a-z]*$/gi;
    for (let i=0;i<name.length;++){
        let x = name[i].value;
        regName.test(x) ? alert("it's ok") : alert("it's not ok");
    }
    let regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
}
*/