import { ReactElement, forwardRef } from "react";

interface InputProps
    extends React.PropsWithRef<JSX.IntrinsicElements['input']> {
    id: string;
    label?: string | ReactElement;
    flex?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, flex = false, ...rest }, ref) => {
        console.log(id , label , flex, rest , ref)
        return (
            <>
                
            </>
        );
    },
);

