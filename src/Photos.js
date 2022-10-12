import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  className="img-thumbnail"
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={photo.src.landscape} alt={photo.src.photografer} />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
