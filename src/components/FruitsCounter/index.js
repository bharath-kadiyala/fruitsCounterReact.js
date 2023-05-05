import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatenMangos = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatenBananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-main-container">
        <div className="card-container">
          <div className="text-container">
            <h1 className="title">
              Bob ate <span className="span-sty">{mangoes}</span> mangoes{' '}
              <span className="span-sty">{bananas}</span> bananas
            </h1>
          </div>
          <div className="img-container">
            <div className="mango-container">
              <img
                className="img-sty"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="btn-sty"
                type="button"
                onClick={this.eatenMangos}
              >
                Eat Mangoes
              </button>
            </div>
            <div className="banana-container">
              <img
                className="img-sty"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="btn-sty"
                type="button"
                onClick={this.eatenBananas}
              >
                Eat Bananas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
