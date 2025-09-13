import React from "react";
import { IconButton as MuiIconButton } from "@mui/material";
import { SxProps } from "@mui/system";

interface Props {
  size?: "small" | "medium" | "large";
  ariaLabel?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  edge?: false | "start" | "end";
  className?: string;
  disabled?: boolean;
  sx?: SxProps;
  disableRipple?: boolean;
}

const IconButton: React.FC<React.PropsWithChildren<Props>> = ({
  size = "medium",
  ariaLabel,
  onClick,
  edge = false,
  className,
  disabled = false,
  sx,
  disableRipple = false,
  children,
}) => {
  return (
    <MuiIconButton
      size={size}
      aria-label={ariaLabel}
      onClick={onClick}
      edge={edge}
      className={className}
      disabled={disabled}
      disableRipple={disableRipple}
      sx={{
        "&:focus": { outline: "none !important" },
        ...sx,
      }}
    >
      {children}
    </MuiIconButton>
  );
};

export default IconButton;
