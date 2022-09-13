import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, obrigatorio, aoAlterado, valor }) => {
  const aoDigitado = (e) => {
    aoAlterado(e.target.value);
  };

  return (
    <div className='campo-texto'>
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CampoTexto;
