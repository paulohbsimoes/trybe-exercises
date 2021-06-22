import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estados: [],
      cargoAlert: false
    }
  }

  componentDidMount() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(estados => {
      const nomes = estados.map(estado => estado.nome);
      nomes.sort();
      this.setState({ estados: nomes })
    })
  }

  handleCargoAlert = () => {
    const { cargoAlert } = this.state;
    cargoAlert || alert('Preencha o campo Cargo com atenção');
    this.setState({ cargoAlert: true });
  }

  render() {
    const { values, errors, handleChange, handleBlur,
      handleSubmit, handleClear } = this.props;
    const { estados } = this.state;

    return (
      <form className="container my-5" onSubmit={handleSubmit} autoComplete="off">
        <fieldset>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input
              name="nome"
              type="text"
              className="form-control"
              id="nome"
              value={values.nome}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            { errors.nome && <ErrorMessage value={ errors.nome } /> }
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              name="email"
              type="email"
              className="form-control"
              id="email"
              value={values.email}
              error={ errors.email }
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            { errors.email && <ErrorMessage value={ errors.email } /> }
          </div>
          <div className="mb-3">
            <label htmlFor="cpf" className="form-label">CPF</label>
            <input
              name="cpf"
              type="text"
              className="form-control"
              id="cpf"
              value={values.cpf}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            { errors.cpf && <ErrorMessage value={ errors.cpf } /> }
          </div>
          <div className="mb-3">
            <label htmlFor="endereco" className="form-label">Endereço</label>
            <input
              name="endereco" 
              type="text"
              className="form-control"
              id="endereco"
              value={values.endereco}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            { errors.endereco && <ErrorMessage value={ errors.endereco } /> }
          </div>
          <div className="mb-3">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input
              name="cidade"
              type="text"
              className="form-control"
              id="cidade"
              value={values.cidade}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            { errors.cidade && <ErrorMessage value={ errors.cidade } /> }
          </div>
          <div className="mb-3">
            <label htmlFor="estado" className="form-label">Estado</label>
            <select
              name="estado"
              className="form-control"
              id="estado"
              value={values.estado}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              { estados.map((estado, index) => (
                <option key={ index } value={ estado }>{ estado }</option>
              )) }
            </select>
            { errors.estado && <ErrorMessage value={ errors.estado } /> }
          </div>
          <div className="form-check">
            <label className="form-check-label">
              Casa
              <input
                className="form-check-input"
                type="radio"
                name="tipo"
                value="Casa"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={ values.tipo === 'Casa' }
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              Apartamento
              <input
                className="form-check-input"
                type="radio"
                name="tipo"
                value="Apartamento"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={ values.tipo === 'Apartamento' }
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="mt-4">
          <div className="mb-3">
            <label htmlFor="cargo" className="form-label">Cargo</label>
            <textarea
              className="form-control"
              id="cargo"
              name="cargo"
              rows="3"
              value={values.cargo}
              onMouseEnter={this.handleCargoAlert}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            { errors.cargo && <ErrorMessage value={ errors.cargo } /> }
          </div>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">Descrição do cargo</label>
            <textarea
              className="form-control"
              id="descricao"
              name="descricao"
              value={values.descricao}
              rows="3"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            { errors.descricao && <ErrorMessage value={ errors.descricao } /> }
          </div>
        </fieldset>

        <div className="buttons my-2">
          <button type="submit" className="btn btn-primary">Enviar</button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={handleClear}
          >
            Limpar
          </button>
        </div>
      </form>
    );
  }
}
 
export default Form;
