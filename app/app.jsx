import React from 'react';
import ReactDOM from 'react-dom';
import RGBColor from 'rgbcolor';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: props.value};
  }

  colorChange(type, e) {
    let currentColor = this.state.color; //this.props.value;//
    currentColor[type] = parseInt(e.target.value);
    this.setState({color: currentColor});
    this.props.onChange(currentColor);
  }

  render() {
    const rgba = {
      r: Math.round(this.state.color[0] * 255 / 100),
      g: Math.round(this.state.color[1] * 255 / 100),
      b: Math.round(this.state.color[2] * 255 / 100),
      a: 1.0,
    };
    return (
      <div className="colorPicker" style={{'backgroundColor': `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`}}>
        <div>
          R
          <input
            type="range"
            value={this.state.color[0]}
            onChange={this.colorChange.bind(this, 0)}
          />
        </div>
        <div>
          G
          <input
            type="range"
            value={this.state.color[1]}
            onChange={this.colorChange.bind(this, 1)}
          />
        </div>
        <div>
          B
          <input
            type="range"
            value={this.state.color[2]}
            onChange={this.colorChange.bind(this, 2)}
          />
        </div>
      </div>
    );
  }
}


ColorPicker.propTypes = {
  value: React.PropTypes.Array,
  onChange: React.PropTypes.func,
}
ColorPicker.defaultProps = {value: [0, 0, 0], onChange: () => {}}

const Application = () => {

  const color = new RGBColor(document.getElementById("favoriteColor") && document.getElementById("favoriteColor").innerText || "red");

  return (
    <ColorPicker
      value={[color.r || 0, color.g || 0, color.b || 0]}
    />
  )
}

ReactDOM.render(<Application />, document.getElementById('app'));