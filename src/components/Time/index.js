import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  return (
    colaboradores.length > 0 && (
      <section className='time' style={{ backgroundColor: corSecundaria }}>
        <h3 style={{ borderBottomColor: corPrimaria }}>{nome}</h3>
        <div className='colaboradores'>
          {colaboradores.map(({ nome, cargo, imagem }) => (
            <Colaborador
              key={nome}
              nome={nome}
              cargo={cargo}
              imagem={imagem}
              corDeFundo={corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
