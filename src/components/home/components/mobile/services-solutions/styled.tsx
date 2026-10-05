import amala1 from "assets/asyst/img/background/services-solutions/amala1-mobile.png"
import amala2 from "assets/asyst/img/background/services-solutions/amala2-mobile.png"
import hermes1 from "assets/asyst/img/background/services-solutions/hermes1-mobile.png"
import hermes2 from "assets/asyst/img/background/services-solutions/hermes2-mobile.png"

export const styles = {
    box: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "10px",

        rectangle: {
            width: "40px",
            height: "4px",
            borderRadius: "100px",
            background: "#A3A3A3",
        }
    },

    boxContent: {
        paddingLeft: "16px",
        paddingRight: "16px",

        title: {
            color: "#002663",
            fontFamily: "Inter",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHight: "26px",
            paddingTop: "15px",
            paddingBottom: "11px",
        },

        text: {
            color: "#4A4A4A",
            fontFamily: "Source Sans Pro",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
        },

        boxImageAmala: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "20px",

            amala1: {
                height: "100px",
                width: "159px",
                backgroundImage: `url(${amala1})`,
            },

            amala2: {
                height: "100px",
                width: "159px",
                backgroundImage: `url(${amala2})`,
            }
        },

        boxImageHermes: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "20px",

            hermes1: {
                height: "100px",
                width: "159px",
                backgroundImage: `url(${hermes1})`,
            },

            hermes2: {
                height: "100px",
                width: "159px",
                backgroundImage: `url(${hermes2})`,
            }
        }
    }
}