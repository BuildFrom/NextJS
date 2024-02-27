'use client';

import { type PropsWithChildren } from "react";
import { toast } from "sonner";


function CopyButton({ text, children, ...props }: PropsWithChildren<{ text: string }>) {
    const onClick = () => {
        navigator.clipboard.writeText(text);
        toast("Copied to clipboard");
    }

    return (
        <button onClick={onClick} {...props}>
            {children}
        </button>
    )
}

export default CopyButton;