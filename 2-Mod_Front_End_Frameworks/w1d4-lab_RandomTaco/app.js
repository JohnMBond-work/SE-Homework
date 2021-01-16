class App Extends React.Component {
State = {
    Loading: true,
    test: null
}
async componentDidMount() {
    const url = "http://taco-randomizer.herokuapp.com/random/?full-tack=true"
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    this.ListeningStateChangedEvent({test: data, loading: false})
}

CanvasRenderingContext2D() {
    return(
        <div>
            {this.state.loading || !this.stte.test ? ( <div>loading...</div>
    ) : (

            <div>URL: {this.state.test.seasoning.rul}
            <div><span>Recipe: ===</span>{this.state.test.seasoning.recipe}</div>
            <div><span>Slug: ====</span>{this.state.test.seasoning.slug}</div>
            <div><span>Name: ===</span>{this.state.test.condiment.url}</div>
            
            </div>
        )}
        </div>
    )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('container')
)
