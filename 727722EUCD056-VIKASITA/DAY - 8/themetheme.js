import React, { useContext } from 'react';
import { ThemeContext } from './Exercise13Context';

const ThemedComponent = () => {
    const { theme } = useContext(ThemeContext);
    const style = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        padding: "10px",
        margin: "10px 0"
    };

    return (
        <div style={style}>
            This is a themed component.
        </div>
    );
};

export default ThemedComponent;
