import { forwardRef } from "react";
import { Button, ButtonProps } from "./Button";

export type SecondaryButtonProps = Omit<ButtonProps,"type">;

const SecondaryButton = forwardRef<HTMLButtonElement,SecondaryButtonProps>(
    ({ ...props },ref) => {
        return <Button ref={ref} type="Secondary" {...props}/>
    }
)

SecondaryButton.displayName = "SecondaryButton"

export default SecondaryButton;