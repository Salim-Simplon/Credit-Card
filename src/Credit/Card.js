const React = require("react");
require("./Card.css");

class Data extends React.Component {
  state = {
    num: "****************",
    name: "CLIENT",
    expire: "MM/AA",
  };

  Change1 = (m) => {
    let reg = /^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})$/g;
    if (reg.test(m.target.value)) {
    this.setState({
      num: m.target.value,
    });
  }
  };

  Change2 = (n) => {
    let reg = /^[a-z]*\s?[a-z]*$/gi;
    if (reg.test(n.target.value)) {
      this.setState({
        name: n.target.value,
      });
    }
  };

  Change3 = (e) => {
    let reg = /^(((0)[0-9])|((1)[0-2]))(\/)(([2][0-5]))$/g;
    if (reg.test(e.target.value)) {
      this.setState({
        expire: e.target.value,
      });
    } 
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
                  name="nombre"
                  id="nombre"
                  placeholder="Numero du RIB"
                  size="20"
                  onChange={this.Change1}
                />
              </p>
              <p>
                Saisir le Nom et Prenom :
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nom du Client"
                  size="12"
                  onChange={this.Change2}
                />
              </p>

              <p>
                Saisir la Date d'expiration :
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="MM/AA"
                  size="10"
                  onChange={this.Change3}
                />
              </p>
              <div className="form-actions">
                <button className="btn btn-primary btn-block">Nouvelle Tentative</button>
              </div>
            </form>
          </div>
        </div>

        <div className="card">
          <div>
            <img src="/image/Salim.jpeg" alt="" />
          </div>

          <div className="cardNumber">{this.state.num}</div>

          <div className="cardInfo">
            <div className="cardInfoName">
              <div className="cardInfoLabel">NOM ET PRENOM</div>
              <div className="name">{this.state.name}</div>
            </div>

            <div className="cardInfoExpiry">
              <div className="cardInfoLabel">EXPIRE LE</div>
              <div className="date">{this.state.expire}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = Data;
