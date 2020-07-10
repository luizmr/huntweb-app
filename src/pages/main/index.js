import React, {Component} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'

import './styles.css'

export default class Main extends Component {
	// variavel de estado para salvar os dados -> estado
	state = {
		products: [],
		productInfo: [],
		page: 1,
	}

	// metodo executado qunado é mostrado em tela
	componentDidMount() {
		this.loadProducts()
	}

	// nao sobrescreve o valor do this
	loadProducts = async (page = 1) => {
		const response = await api.get(`/products?page=${page}`)

		const {docs, ...productInfo} = response.data

		// para salvar na variavel, usa setState - var page é salva para atualizar o estado da pagina
		this.setState({
			products: docs,
			productInfo,
			page,
		})
	}

	prevPage = () => {
		const {page, productInfo} = this.state

		if (page === 1) return

		const pageNumber = page - 1

		this.loadProducts(pageNumber)
	}

	nextPage = () => {
		const {page, productInfo} = this.state

		if (page === productInfo.pages) return

		const pageNumber = page + 1

		this.loadProducts(pageNumber)
	}

	render() {
		// desestruturação
		const {products, page, productInfo} = this.state

		return (
			<div className="product-list">
				{products.map((product) => (
					<article key={product._id}>
						<strong>{product.title}</strong>
						<p>{product.description}</p>
						{/* troca a tag 'a' pelo Link */}
						<Link to={`/products/${product._id}`}>Acessar</Link>
					</article>
				))}
				<div className="actions">
					<button disabled={page === 1} onClick={this.prevPage}>
						Anterior
					</button>
					<button disabled={page === productInfo.pages} onClick={this.nextPage}>
						Próximo
					</button>
				</div>
			</div>
		)
	}
}
