const React = require("react");
require("./Card.css");

class Data extends React.Component {
  state = {
    num: "****************",
    name: "Client",
    date: "MM/AA",
  };

  Change1 = (e) => {
    this.setState({
      num: e.target.value,
    });
  };

  Change2 = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  Change3 = (e) => {
    this.setState({
      date: e.target.value,
    });
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
                  /*
                pattern="[\d| ]{16,22}"*/
                  size="10"
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
                  size="10"
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
                  /*pattern="\d\d/\d\d" */

                  size="10"
                  onChange={this.Change3}
                />
              </p>
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
              <div className="date">{this.state.date}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = Data;
