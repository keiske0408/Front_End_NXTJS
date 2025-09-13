import { forwardRef } from "react";
import { Button, ButtonProps } from "./Button";

export type PrimaryButtonProps = Omit<ButtonProps, "type"> & { name?: string };

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ name, ...props }, ref) => {
    return <Button ref={ref} type="Primary" {...props} />;
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
