import React, { Component } from "react";
import Tabela from "./components/Tabela";
import "./App.css";

class App extends Component {
  state = {
    autores: [
      {
        nome: "Paulo",
        livro: "React",
        preco: "1000"
      },
      {
        nome: "Daniel",
        livro: "Java",
        preco: "99"
      },
      {
        nome: "Marcos",
        livro: "Design",
        preco: "150"
      },
      {
        nome: "Bruno",
        livro: "DevOps",
        preco: "100"
      }
    ]
  };
  removeLine = idPosition => {
    const { autores } = this.state;
    autores.splice(idPosition, 1);
    this.setState({ autores });
  };

  render() {
    return (
      <div className="App">
        <Tabela autores={this.state.autores} removeLine={this.removeLine} />
      </div>
    );
  }
}

export default App;
