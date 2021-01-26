import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    //Call React.createRef() and assign it to an instance variable
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //Lets us know when image is loaded and we can access its height.
    this.imageRef.current.addEventListener(
      "load",
      this.setSpans
    );
  }

  setSpans = () => {
    const height = this.imageRef.current
      .clientHeight;
    //caluculate spans and set it on our state
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };

  render() {
    //destructure
    const {
      description,
      urls,
    } = this.props.image;

    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.spans}`,
        }}
      >
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
