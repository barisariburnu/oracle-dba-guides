import React from 'react';
import Admonition from '@theme/Admonition';

export default function Callout({ children, type = 'info', title }) {
    return (
        <Admonition type={type} title={title}>
            {children}
        </Admonition>
    );
}
