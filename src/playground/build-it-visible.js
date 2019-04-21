class VisibilityTogle extends React.Component {
  handleVisibilityButton() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  constructor(props) {
    super(props);
    this.handleVisibilityButton = this.handleVisibilityButton.bind(this);
    this.state = {
      visibility: false
    };
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibilityButton}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityTogle />, document.getElementById('app'));

// let visibility = false;
// const toggleVisibility = ()  => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//             {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//         </div>
//     );
//     ReactDOM.render(jsx,document.getElementById('app'));
// };
// render();
