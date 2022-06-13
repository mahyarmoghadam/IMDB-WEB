import React from "react";
import Header from "./header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Minion1 from './minion1.png';
import MinionBG from './minion-BG.jpg';


export default function FirstPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${MinionBG.src})`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '100%'
          // height: '100vh'
        }}>
        <Header />
        <div className='col-12'
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
            // paddingBottom: '20px'
          }}>

          <div
            style={{
              width: '50%'
            }}>
            <p>helo</p>
          </div>

          <div
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'flex-end;',
              flexDirection: 'column'
            }}>

            <div
              style={{
                display: 'flex',
                marginBottom: '101px'
              }}>


              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  width: '20%',
                  height: '205px',
                  margin: '10px'
                }}
              >
                <img
                  style={{
                    width: '100%',
                    height: '180px',
                    backgroundImage: `url(${Minion1.src})`,
                    borderRadius: '6px'
                  }}
                  src={Minion1.src}>
                </img>
                <p
                  style={{
                    color: 'white'
                  }}>Despicable Me1
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  width: '20%',
                  height: '205px',
                  margin: '10px'
                }}
              >
                <img
                  style={{
                    width: '100%',
                    height: '180px',
                    backgroundImage: `url(${Minion1.src})`,
                    borderRadius: '6px'
                  }}
                  src={Minion1.src}>
                </img>
                <p
                  style={{
                    color: 'white'
                  }}>Despicable Me1
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  width: '20%',
                  height: '205px',
                  margin: '10px'
                }}
              >
                <img
                  style={{
                    width: '100%',
                    height: '180px',
                    backgroundImage: `url(${Minion1.src})`,
                    borderRadius: '6px'
                  }}
                  src={Minion1.src}>
                </img>

                <p
                  style={{
                    color: 'white'
                  }}>Despicable Me1
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  width: '20%',
                  height: '205px',
                  margin: '10px'
                }}
              >
                <img
                  style={{
                    width: '100%',
                    height: '180px',
                    backgroundImage: `url(${Minion1.src})`,
                    borderRadius: '6px'
                  }}
                  src={Minion1.src}>
                </img>
                <p
                  style={{
                    color: 'white'
                  }}>Despicable Me1
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '20px',
                padding: '0px 20px'
              }}>

              <div
                style={{
                  display: 'flex',
                  width: '50%'
                }}>
                <button
                  style={{
                    backgroundColor: '#cdcdcda6',
                    width: '11%',
                    height: '35px',
                    borderRadius: '50%'
                  }}>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    style={{
                      fontSize: 17,
                      color: 'white'
                    }}
                  />
                </button>

                <button
                  style={{
                    backgroundColor: '#cdcdcda6',
                    width: '11%',
                    height: '35px',
                    borderRadius: '50%'
                  }}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{
                      fontSize: 17,
                      color: 'white'
                    }}
                  />
                </button>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '50%',
                  alignItems: 'center',
                }}>

                <p
                  style={{
                    color: 'white'
                  }}>
                  01
                </p>

                <div
                  style={{
                    width: '10%',
                    height: '2px',
                    margin: '0 14px',
                    backgroundColor: 'white'
                  }}></div>

                <p
                  style={{
                    color: 'white'
                  }}>
                  01
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <Slider /> */}
      </div>

    </>
  );
}
