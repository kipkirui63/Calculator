import React from "react";
import { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        if (value === '='){
            try {
                setInput(eval(input).toString())
            }
        }
    }
}