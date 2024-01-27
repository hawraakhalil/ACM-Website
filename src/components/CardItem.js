import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link" style={{ boxShadow: props.shadow }}>
          <figure
            className={`cards__item__pic-wrap-${props.color}`}
            data-category={props.label}
          >
            <img
              src={props.src}
              alt="Member Pic"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <div style={{ display: "flex", justifyContent: "center" }}>
            {props.linkedin === "user" ? (
    <Link to={props.profile} target="_blank">
    <i
      className="fa-solid fa-user"
      style={{
        color: "black",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        fontSize: "33px",
      }}
      onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
      onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    />
        </Link>
  ) : (
    // Render LinkedIn icon if props.linkedin is a URL
    <Link to={props.linkedin} target="_blank">
      <i
        className="fa-brands fa-linkedin"
        style={{
          color: props.linkedin ? "black" : "gray", // Customize the color as needed
          fontSize: "37px",
          transition: "transform 0.3s ease",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      />
    </Link>
  )}
              <Link to={props.email}>
                <i
                  class="fa-solid fa-envelope"
                  style={{
                    color: "black",
                    fontSize: "37px",
                    paddingLeft: "5px",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
