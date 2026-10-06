
import { createTheme } from "@mui/material/styles";
import { tooltipClasses } from '@mui/material/Tooltip';

const theme = createTheme({
    palette: {
        primary: { main: "#2775BB", contrastText: "#fff" },
        secondary: { main: "#123554", contrastText: "#fff" },
        success: { main: "#89BA3A", contrastText: "#fff" },
    },
    spacing: 16,
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontSize: 14,
        button: {
            textTransform: "none",
            fontFamily: ["Inter"].join(", ")
        },
        fontFamily: ["Inter"].join(", ")
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    opacity: 100
                }
            }
        },
        // MuiPaper: {
        //     styleOverrides: {
        //         root: {
        //             boxShadow: "none",
        //             border: "1px solid #dee3e8"
        //         }
        //     }
        // },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 3,
                    padding: "12px 0px 12px 12px",
                    background: "#fff",
                    color: "#000",
                    userSelect: "none",
                    fontSize: 12,
                    [`& .${tooltipClasses.arrow}`]: {
                        color: "#fff"
                    }
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "& .MuiDataGrid-root": {
                        border: "0px solid #fff !important",

                    },
                    "&:last-child td": {
                        borderBottom: 0,
                    },
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0000001f"
                    },
                    fontSize: "13px",
                    fontFamily: "Source Sans Pro"
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: "3px",
                    padding: "2px 5px",
                    "&:after, &:before": {
                        display: "none"
                    },
                    background: "#ebeff2"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiFormLabel-root": {
                        fontSize: "14px",
                        fontFamily: "Source Sans Pro"
                    }
                }
            }
        }
    }
});

export default theme;