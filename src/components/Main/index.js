import './Main.css';

function App() {
  const mockDevs = [
    { name: "Rafael", gh: "https://github.com/txusca", img: "" },
    { name: "Teste1", gh: "https://github.com/teste1", img: "" },
    { name: "Teste2", gh: "https://github.com/teste2", img: "" },
    { name: "Teste3", gh: "https://github.com/teste3", img: "" },
  ]

  return (
    <div className="container">
      <div className="informacoes">
        <div className="info-projeto">
          <h1>Nome do projeto</h1>
          <h3>O projeto faz isso...</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nostrum voluptate in explicabo sunt sit dolorum maxime ut. Modi eum molestiae excepturi quod, nihil dolorem officiis accusantium repellendus illo laborum.</p>
        </div>
        <div className="container-btn-comecar">
          <div className="img-projeto">
            <img src="" alt="Imagem do projeto" />
          </div>
          <a href="#">
            <div className="btn-comecar">Começar</div>
          </a>
        </div>
      </div>
      <div className="desenvolvedores">
        <h2>Desenvolvido por:</h2>
        <ul className="list-desenvolvedores">
          { 
            mockDevs.map(dev => (
              <li>
                {
                  <>
                    <img src={dev.img} alt="Imagem do desenvolvedor" />
                    <div className="info-desenvolvedor">
                      <a href={dev.gh}>
                        <h3>{dev.name}</h3>
                      </a>
                    </div>
                  </>
                }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;