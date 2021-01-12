console.table(products)

state = {
    products: products,
    value: ''
}

handleChange = (event) =>{
    console.log(event.target.value)
}

class App extends React.Component {
    render () {
        return (
            <div>
                <h1> Big Time Shopping </h1>
                <input type="text" />
                <ul>
                {this.state.products.map(product => {
                    return (
                        <li>{product.name } {product.price}</li>)}
                    )
                }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('container')
)
