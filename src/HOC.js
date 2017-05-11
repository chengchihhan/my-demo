import React from 'react';

const HOC = (Component) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    this.setState({
      name: 'Will'
    });
  }

  render() {
    return (
       <Component {...this.props} name={this.state.name} />
    )
  }
};

export default HOC;
