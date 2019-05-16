import React from 'react'

export const themes = {
    a: {
        background: 'red',
    },
    b: {
        background: 'yellow',
    },
};

export const ThemeContext = React.createContext(
    themes // 默认值
);