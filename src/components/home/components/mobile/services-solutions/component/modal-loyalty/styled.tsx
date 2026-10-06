import hermes1 from "assets/asyst/img/background/services-solutions/hermes1-mobile.webp"
import hermes2 from "assets/asyst/img/background/services-solutions/hermes2-mobile.webp"

export const styles = {
    paper: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "362px",
        height: "296px",
        borderRadius: "20px 20px 0px 0px",
        background: "#F3F3F3",
        boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)",

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
                color: "#123554",
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

            boxImage: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: "20px",

                amala1: {
                    height: "100px",
                    width: "159px",
                    backgroundImage: `url(${hermes1})`,
                },

                amala2: {
                    height: "100px",
                    width: "159px",
                    backgroundImage: `url(${hermes2})`,
                }
            }
        }
    }
}