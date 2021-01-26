import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  //   const images = props.images.map((image) => {
  //     return (
  //       <img
  //         key={image.id}
  //         src={image.urls.regular}
  //         alt={image.description}
  //       />
  //     );
  //});

  //Version below destructures image
  //   const images = props.images.map(
  //     ({ description, id, urls }) => {
  //       return (
  //         <img
  //           alt={description}
  //           key={id}
  //           src={urls.regular}
  //         />
  //       );
  //     }
  //   );

  //version below passes props to an image card
  const images = props.images.map((image) => {
    return (
      <ImageCard key={image.id} image={image} />
    );
  });

  return (
    <div className="image-list">{images}</div>
  );
};

export default ImageList;
