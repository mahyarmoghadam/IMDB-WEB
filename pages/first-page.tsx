import React from "react";
import Navbar from "../components/Navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function FirstPage() {
  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url('/images/minion-BG.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div
          className="columns-12 w-full"
          style={{
            // height: '100vh',
            display: "flex",
            justifyContent: "space-around",
            // paddingBottom: '20px'
          }}
        >
          <div
            className="columns-6 w-full"
            // style={{
            //   width: "50%",
            // }}
          >
            <p>helo</p>
          </div>

          <div
            className="columns-6 w-full"
            style={{
              // width: "50%",
              display: "flex",
              justifyContent: "flex-end;",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: "101px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  width: "20%",
                  height: "205px",
                  margin: "10px",
                }}
              >
                {/* <Image
                  style={{
                    // backgroundImage: `url(${Minion1.src})`,
                    borderRadius: "6px",
                  }}
                  src={Minion1.src}
                  alt="Landscape picture"
                  width={"100%"}
                  height={"180px"}
                /> */}
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Despicable Me1
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  width: "20%",
                  height: "205px",
                  margin: "10px",
                }}
              >
                {/* <Image
                  style={{
                    backgroundImage: `url(${Minion1.src})`,
                    borderRadius: "6px",
                  }}
                  src={Minion1.src}
                  alt="Landscape picture"
                  width={"100%"}
                  height={"180px"}
                /> */}
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Despicable Me1
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  width: "20%",
                  height: "205px",
                  margin: "10px",
                }}
              >
                {/* <Image
                  style={{
                    backgroundImage: `url(${Minion1.src})`,
                    borderRadius: "6px",
                  }}
                  src={Minion1.src}
                  alt="Landscape picture"
                  width={"100%"}
                  height={"180px"}
                /> */}
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Despicable Me1
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  width: "20%",
                  height: "205px",
                  margin: "10px",
                }}
              >
                {/* <Image
                  style={{
                    backgroundImage: `url(${Minion1.src})`,
                    borderRadius: "6px",
                  }}
                  src={Minion1.src}
                  alt="Landscape picture"
                  width={100}
                  height={"180px"}
                /> */}
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Despicable Me1
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "20px",
                padding: "0px 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "50%",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#cdcdcda6",
                    width: "11%",
                    height: "35px",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    style={{
                      fontSize: 17,
                      color: "white",
                    }}
                  />
                </button>

                <button
                  style={{
                    backgroundColor: "#cdcdcda6",
                    width: "11%",
                    height: "35px",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{
                      fontSize: 17,
                      color: "white",
                    }}
                  />
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "50%",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "white",
                  }}
                >
                  01
                </p>

                <div
                  style={{
                    width: "10%",
                    height: "2px",
                    margin: "0 14px",
                    backgroundColor: "white",
                  }}
                ></div>

                <p
                  style={{
                    color: "white",
                  }}
                >
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
