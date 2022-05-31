import React from "react";
// import './header/header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faList
} from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from 'react-icons/fa';

export default function about() {
  return (
    <>
      <nav
        style={{
          backgroundColor: '#121212',
          display: 'flex',
          padding: '10px 5px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            display: 'flex'
          }}>

          <button style={{
            backgroundColor: '#FFDF00',
            height: '35px',
            width: '64px',
            borderRadius: '5px',
            fontSize: 'larger',
            fontFamily: 'fantasy'
          }}>IMDb</button>

          <button
            style={{
              backgroundColor: 'transparent',
              height: '35px',
              width: '64px',
              borderRadius: '5px',
              fontFamily: 'system-ui',
              fontSize: 'inherit',
              fontWeight: 'bold',
              margin: '0 26px',
              color: '#fff',
              display: 'flex',
              alignItems: 'center'
            }}>
            <FontAwesomeIcon
              icon={faList}
              style={{
                fontSize: 17,
                color: "gray",
                paddingRight: '10px'
              }}
            />
            Menu
          </button>

          {/* <h3> <FaBeer /> </h3> */}

          <button
            style={{
              backgroundColor: '#fff',
              height: '35px',
              width: '64px',
              borderRadius: '5px 0 0 5px',
              borderRight: '2px solid gray',
              fontFamily: 'system-ui',
              fontSize: 'inherit',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            All
          </button>
          <input placeholder="Search imdb"
            style={{
              width: '500px',
              padding: '2px 9px',
              borderRadius: '0 5px 5px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1px 23px'
            }}>
            <a>
              <span
                style={{
                  fontFamily: 'fantasy',
                  color: '#fff',
                }}>
                IMDb
              </span>


              <span
                style={{
                  color: 'blue',
                  fontFamily: 'fantasy'
                }}>
                Pro
              </span>
            </a>
          </div>

          <div
            style={{
              border: '1px solid gray',
              width: '2.5px'
            }}>
          </div>

          <div>
            <button
              style={{
                backgroundColor: 'transparent',
                height: '35px',
                width: '100%',
                fontFamily: 'system-ui',
                fontSize: 'inherit',
                fontWeight: 'bold',
                margin: '0 15px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center'
              }}>
              <FontAwesomeIcon
                icon={faList}
                style={{
                  fontSize: 17,
                  color: "gray",
                  paddingRight: '10px'
                }}
              />
              Watchlist
            </button>
          </div>

          <div>
            <button
              style={{
                backgroundColor: 'transparent',
                height: '35px',
                width: '100%',
                fontFamily: 'system-ui',
                fontSize: 'inherit',
                fontWeight: 'bold',
                margin: '0 15px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center'
              }}>
              Sign In
            </button>
          </div>


          <div>
            <button
              style={{
                backgroundColor: 'transparent',
                height: '35px',
                width: '100%',
                margin: '0 15px',
                fontFamily: 'system-ui',
                fontSize: 'inherit',
                fontWeight: 'bold',
                color: '#fff',
                display: 'flex',
                alignItems: 'center'
              }}>
              En
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
