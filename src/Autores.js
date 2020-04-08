import React, { Component, Fragment } from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from './ApiService';
import PopUp from './PopUp';

class Autores extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nomes: [],
            titulo: 'Autores'
        };
    }

    componentDidMount() {
        ApiService.ListaNomes()
            .then(res => {
                this.setState({ nomes: [...this.state.nomes, ...res.data] });
                PopUp.exibeMensagem('success', 'Autores Listados com sucesso');
            });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']} />
                </div>
            </Fragment>
        );
    }

}
export default Autores;