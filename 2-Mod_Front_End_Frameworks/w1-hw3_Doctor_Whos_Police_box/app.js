console.log("test")

class App extends React.Component {
    state = {
      tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
      }
    }
    changeIt = (text) => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  } // End of changeIt function

    render () {
      return (
       <div onClick={ () => this.changeIt(this.state.tardis.name)}>
           <DivOne datta={this.state.tardis.name}/>

       </div>
      )
    }
} // End of class App
  
  class DivOne extends React.Component {
      render() {
          return (<div >
              <DivTwo datta={this.props.datta}/>
          </div>
          )
        }
  }

  class DivTwo extends React.Component {
    render() {
        return (<div >
            <DivThree datta={this.props.datta}/>
        </div>
        )
      }
  }

  class DivThree extends React.Component {
    render() {
        return (<div >
            <DivFour datta={this.props.datta}/>
        </div>
        )
      }
  }

  class DivFour extends React.Component {
    render() {
        return (<div>
            <h3>{this.props.datta}</h3>
        </div>
        )
      }
  }
  
  ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )
  