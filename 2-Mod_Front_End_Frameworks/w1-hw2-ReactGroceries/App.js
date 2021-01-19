// ReactGroceryList

class App extends React.Component {
    state = {
        groceries,
        item: "",
        brand: "",
        units: "",
        quantity: ""
    }
    itemChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submit = (event) => {
        event.preventDefault()
        console.log("submit");
        const item = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: false
        }
        this.setState({
            groceries: [
                item, ...this.state.groceries
            ],
            item: "",
            brand: "",
            units: ""
        })
    }
    render() {
        return (<div>
            <form onSubmit={this.submit}>
                <input id="item" onChange={this.itemChange} type='text' placeholder = "Item" value={this.state.item}></input>
                <br/><br/>
                <input id="brand" onChange={this.itemChange} type='text' placeholder = "Brand" value={this.state.brand}></input>
                <br/><br/>
                <input id="units" onChange={this.itemChange} type='text' placeholder = "Units" value={this.state.units}></input>
                <br/><br/>
                <input id="quantity" onChange={this.itemChange} type='text' placeholder = "Quantity" value={this.state.quantity}></input>
                <br/><br/>
                <button>Add to List</button>
                <br/>
            </form><br/>
            <div>
                <ul>
                    {
                        this.state.groceries.map(
                            (grocery) => !grocery.isPurchased
                            ? <li>
                                {grocery.item}
                                <ul>{grocery.brand}</ul>
                                <ul>{grocery.units}</ul>
                                <ul>{grocery.quantity}</ul>
                                </li> :"")}
                </ul>
            </div>
        </div>)
    }
}
const groceries = [
    {
        item: 'Soda',
        brand: 'Sprite',
        units: '2 liters',
        quantity: 1,
        isPurchased: true
    }, {
        item: 'Chips',
        brand: 'Pringles',
        units: '3 oz',
        quantity: 1,
        isPurchased: true
    }, {
        item: 'Cookies',
        brand: 'Thin Oreos',
        units: '16 oz',
        quantity: 1,
        isPurchased: true
    }
]
ReactDOM.render(<App/>, document.querySelector('.container'))




