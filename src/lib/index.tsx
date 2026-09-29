import { bgsSnackbar } from "@andrydharmawan/bgs-component";
import Alert, { AlertColor } from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CryptoJS from 'crypto-js';
import { useEffect, useState } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export function generateUUID() {
    var d = new Date().getTime();
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export function encryptText(plainText: string): string {
    const keyByte = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_KEY_SEARCH_PARAMETER);
    const myIV = keyByte;
    const tdesKeyData = CryptoJS.enc.Hex.parse(
        'A2153708CA62C1D2F7F193DFD2154F7906677A8294163295'
    );

    const encrypted = CryptoJS.TripleDES.encrypt(plainText, tdesKeyData, {
        iv: myIV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return btoa(encrypted.toString());
}

export function decryptText(encryptedText: string): string {
    encryptedText = atob(encryptedText)
    const keyByte = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_KEY_SEARCH_PARAMETER);
    const myIV = keyByte;
    const tdesKeyData = CryptoJS.enc.Hex.parse(
        'A2153708CA62C1D2F7F193DFD2154F7906677A8294163295'
    );

    const decrypted = CryptoJS.TripleDES.decrypt(encryptedText, tdesKeyData, {
        iv: myIV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
}


// Enkripsi data JSON
export function encryptJSON(data: any): string {
    const jsonString = JSON.stringify(data);
    const encryptedData = CryptoJS.AES.encrypt(jsonString, import.meta.env.VITE_KEY_SEARCH_PARAMETER);
    return encryptedData.toString();
}

// Dekripsi data JSON
export function decryptJSON(encryptedString: string) {
    try {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedString, import.meta.env.VITE_KEY_SEARCH_PARAMETER);
        const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedString);
    } catch (error) {
        console.error("Dekripsi gagal:", error);
        return null;
    }
}

type CombinationTypeModel = "ctrl" | "alt" | "shift";
export function useKeyPress(targetKey: string | number, combination?: CombinationTypeModel | CombinationTypeModel[]) {
    //https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/

    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    const condition = (key: string, keyCode: number) => {
        if (typeof targetKey === "string" && key === targetKey) return true;
        if (typeof targetKey === "number" && keyCode === targetKey) return true;

        return false
    }

    const downHandler = (props: KeyboardEvent) => {
        const { key, keyCode } = props;
        if (combination) {
            if (typeof combination === "string") {
                if (condition(key, keyCode) && props[`${combination}Key`]) props.preventDefault(), setKeyPressed(!keyPressed);
            }
            else {
                if (condition(key, keyCode) && combination.filter(x => props[`${x}Key`]).length === combination.length) props.preventDefault(), setKeyPressed(!keyPressed);
            }
        }
        else {
            if (typeof targetKey === "string" && condition(key, keyCode)) props.preventDefault(), setKeyPressed(!keyPressed);
            if (typeof targetKey === "number" && condition(key, keyCode)) props.preventDefault(), setKeyPressed(!keyPressed);
        }

    }

    const upHandler = ({ key, keyCode }: KeyboardEvent) => {
        if (condition(key, keyCode)) setKeyPressed(false);
    };

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        // return () => {
        //     window.removeEventListener("keydown", downHandler);
        //     window.removeEventListener("keyup", upHandler);
        // };
    }, []);

    return keyPressed;
}

export function disableBodyScroll() {
    document.body.classList.add('no-scroll');
}

// Function to remove the 'no-scroll' class from the body
export function enableBodyScroll() {
    document.body.classList.remove('no-scroll');
}

export function convertQueryStringToObject(queryString: string): { [key: string]: string } {
    const params: { [key: string]: string } = {};

    // Remove any leading or trailing '&'
    if (queryString.startsWith('&')) {
        queryString = queryString.slice(1);
    }
    if (queryString.endsWith('&')) {
        queryString = queryString.slice(0, -1);
    }

    const keyValuePairs = queryString.split('&');

    keyValuePairs.forEach(pair => {
        const [key, value] = pair.split('=');
        params[key] = decodeURIComponent(value);
    });

    return params;
}

export function objectToQueryString(params: { [key: string]: any }): string {
    const keyValuePairs = [];

    for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            const value = encodeURIComponent(params[key].toString());
            keyValuePairs.push(`${key}=${value}`);
        }
    }

    return encodeURI(encryptText(keyValuePairs.join('&')));
}


interface SnackbarProps {
    severity?: AlertColor;
    message: string;
}
export const snackbar = ({ severity, message }: SnackbarProps) => bgsSnackbar({
    vertical: "bottom",
    duration: 5000,
    horizontal: "center",
    render: ({ hide }) => <Alert action={<IconButton onClick={() => hide()}><CloseRoundedIcon /></IconButton>} severity={severity || "error"} sx={{ maxWidth: "450px", minHeight: "34px", width: "80%", display: "flex", alignItems: "center" }}>{message}</Alert>
})

export const scrollTo = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
};
