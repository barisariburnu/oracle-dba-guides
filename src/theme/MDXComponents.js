import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Callout from '@site/src/components/Callout';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Callout>" tag to our Callout component
    // `Callout` will receive all props passed to `<Callout>` in MDX
    Callout,
};
