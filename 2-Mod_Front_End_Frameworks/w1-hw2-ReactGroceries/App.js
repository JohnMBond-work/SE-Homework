class App extends React.Component {
    state = {
        groceries,
        item: "",
        brand: "",
        units: ""
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
            quantity: 1,
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
                <input id="item" onChange={this.itemChange} type='text' value={this.state.item}></input>
                <input id="brand" onChange={this.itemChange} type='text' value={this.state.brand}></input>
                <input id="units" onChange={this.itemChange} type='text' value={this.state.units}></input>
                <button>submit me dammit</button>
            </form>
            <div>
                <ul>
                    {
                        this.state.groceries.map(
                            (grocery) => !grocery.isPurchased
                            ? <li>
                                {grocery.item}</li>
                            : "")
                    }
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
        isPurchased: false
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