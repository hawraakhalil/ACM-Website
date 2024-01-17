import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link"  style= {{ boxShadow:  props.shadow }}>
            <figure className={`cards__item__pic-wrap-${props.color}`} data-category={props.label} >
               <img src={props.src} alt="Member Image"
                className='cards__item__img' />
            </figure>
            <div className="cards__item__info">
                <h5 className="cards__item__text">{props.text}</h5>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                {props.linkedin ? (
                <Link to={props.linkedin} target="_blank">
                  <i
                    className="fa-brands fa-linkedin"
                    style={{
                      color: 'black',
                      fontSize: '37px',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.2)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                  />
                </Link>
              ) : (
                <i
                  className="fa-brands fa-linkedin"
                  style={{
                    color: 'gray',
                    fontSize: '37px',
                    pointerEvents: 'none', // Disable pointer events
                  }}
                />
              )}
                 <Link to={props.email}>
                <i class ="fa-solid fa-envelope" style={{color: "black", fontSize:"37px", paddingLeft: '5px',transition: 'transform 0.3s ease',cursor: 'pointer'}} 
                 onMouseOver={(e) => (e.target.style.transform = 'scale(1.2)')} 
                 onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                />
                </Link>
                </div>
            </div>
        </div>
      </li>
    </>
  )
}

export default CardItem
