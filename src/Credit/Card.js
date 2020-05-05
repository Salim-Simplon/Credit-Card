const React = require("react");
require("./Card.css");

class Data extends React.Component {
  state = {
    star: "****************",
    num: "",
    name: "",
    date: "",
  };

  Change1 = (m) => {
    var val = m.target.value;
    var reg = /^[0-9]+$/g;
    let res;
    let tab = val.split("");

    for (let i = tab.length; i < 16; i++) {
      tab.push("*");
    }
    console.log(tab);

    if (reg.test(val)) {
      this.setState({ star: tab.join(""), num: m.target.value });
      if (val.length === 16) {
        res = val.match(/\d{4}/g).join(" ");
        console.log(res);
        this.setState({ star: res, num: res });
      }
    } else {
      res = "";
    }
  };

  Change2 = (n) => {
    let client = n.target.value;
    let reg = /^[a-z]*\s?[a-z]*$/gi;
    if (reg.test(client)) {
      this.setState({
        name: client,
      });
    }
  };

  Change3 = (e) => {
    let exp = e.target.value;
    let Month = exp.slice(0, 2);
    let Year = exp.slice(2, 4);

    if (exp.length > 3) {
      let reg1 = /^0[1-9]$/;
      let reg2 = /^1[0-2]$/;
      let reg = /^2[0-5]$/;
      if (reg1.test(Month) || reg2.test(Month)) {
        if (reg.test(Year)) {
          exp = Month + "/" + Year;
        } else {
          alert("Enter a correct date");
          exp = "";
        }
      } else {
        alert("Enter a correct date");
        exp = "";
      }
    }
    this.setState({ date: exp });
  };

  render() {
    return (
      <div className="appli">
        <div className="first">
          <h1>MES DONNEES</h1>
          <div className="second">
            <form>
              <p>
                Saisir le RIB :
                <input
                  type="text"
                  id="nombre"
                  placeholder="Numero du RIB"
                  value={this.state.num}
                  onChange={this.Change1}
                />
              </p>
              <p>
                Saisir le Nom et Prenom :
                <input
                  type="text"
                  id="name"
                  placeholder="Nom du Client"
                  value={this.state.name}
                  onChange={this.Change2}
                />
              </p>

              <p>
                Saisir la Date d'expiration :
                <input
                  type="text"
                  id="nombre"
                  placeholder="MM/AA"
                  value={this.state.date}
                  onChange={this.Change3}
                />
              </p>
              <div className="form-actions">
                <button className="btn btn-primary btn-block">
                  Nouvelle Tentative
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="card">
          <div>
            <img src="/image/Salim.jpeg" alt="" />
          </div>

          <div className="cardNumber">{this.state.star}</div>

          <div className="cardInfo">
            <div className="cardInfoName">
              <div className="cardInfoLabel">NOM ET PRENOM</div>
              <div className="name">{this.state.name}</div>
            </div>

            <div className="cardInfoExpiry">
              <div className="cardInfoLabel">EXPIRE LE</div>
              <div className="date">{this.state.date}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = Data;
