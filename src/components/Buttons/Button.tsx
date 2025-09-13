import {
  CircularProgress,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  Stack,
  Box,
} from "@mui/material";
import { forwardRef } from "react";
import { ButtonType } from "./button-type";
import { FormHelperText } from "../FormHelper/FormHelper";


export interface ButtonProps
  extends Pick<
    MuiButtonProps,
    | "className"
    | "children"
    | "fullWidth"
    | "onClick"
    | "sx"
    | "onFocusVisible"
    | "tabIndex"
    | "variant"
    | "role"
    | "onKeyDown"
    | "size"
  > {
  width?: number | string;
  id?: string;
  loading?: boolean;
  href?: string;
  type?: ButtonType;
  buttonActionType?: MuiButtonProps["type"];
  text?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  endIcon?: MuiButtonProps["endIcon"];
}

const LOADER_SIZE = 20;

//FormattedTime -> seconds
const HelperText: React.FC<Pick<ButtonProps, "error" | "helperText">> = ({
  helperText,
  error,
}) => {
  return (
    <Stack>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </Stack>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      text,
      loading,
      className,
      width,
      fullWidth,
      sx,
      id,
      type,
      onClick,
      href,
      buttonActionType,
      disabled,
      endIcon,
      ...props
    },
    ref
  ) => {
    const isDisabledOrLoading = loading || disabled;
    const disabledReasonId = `disabledReason-${Math.random()
      .toString(36)
      .substring(2, 15)}`;
    const role = !href ? { role: "button" } : {};

    const button = (
      <>
        <MuiButton
          ref={ref}
          id={id}
          className={[
            className,
            type,
            loading ? "loading" : null,
            isDisabledOrLoading ? "disabled" : null,
          ]
            .filter(Boolean)
            .join(" ")}
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            width: fullWidth ? "100%" : width,
            height: "fit-content",
            minWidth: 140,
            borderRadius: 0,
            "& #loader": {
              position: "absolute",
              marginY: "auto",
              top: `calc(50% - ${LOADER_SIZE / 2}px)`,
              marginLeft: 1,
            },
            ...sx,
          }}
          fullWidth={fullWidth}
          disabled={disabled}
          aria-label={text}
          aria-disabled={isDisabledOrLoading}
          aria-describedby={disabledReasonId}
          disableRipple={isDisabledOrLoading}
          variant={variantFromType(type)}
          // onClick={}
          href={href}
          type={buttonActionType}
          {...role}
          {...props}
          endIcon={endIcon}
        >
          {children || text || "Continue"}
          {loading && (
            <Box>
              <CircularProgress
                size={LOADER_SIZE}
                color="inherit"
                id="loader"
                aria-live="assertive"
                thickness={5}
              />
            </Box>
          )}
        </MuiButton>
      </>
    );

    return button;

    async function handleClick(
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
      if (isDisabledOrLoading) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        e.preventDefault();
        onClick && onClick(e);
      }
    }
  }
);

const variantFromType = (
  type: ButtonProps["type"]
): MuiButtonProps["variant"] => {
  switch (type) {
    case "Secondary":
    case "SecondaryDarkBG":
      return "outlined";
    case "Primary":
    case "PrimaryDarkBG":
    case "Critical":
    case "Success":
    default:
      return "contained";
  }
};
