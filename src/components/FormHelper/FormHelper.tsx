import {
    Box,
    FormHelperTextProps as MuiFormHelperTextProps,
    Stack,
    FormHelperText as MuiFormHelperText
    } from '@mui/material';
import { ErrorFieldIcon } from "../icons";
import React from "react";


type FormHelperTextProps = MuiFormHelperTextProps & {
    error?: boolean;
    showErroricon?: boolean;
}

export const FormHelperText:  React.FC<FormHelperTextProps> = ({
    children,
    error,
    sx = {},
    ...rest
}) => {
    return (
        <Stack
            direction="row"
            gap = {1}
            alignItems="flex-start"
            justifyContent="flex-start"
        >
            {error && (
            <Box>
              <ErrorFieldIcon />
            </Box>
            )}

            <MuiFormHelperText sx={{mt:0, ...sx}} error={error} {...rest}>
              {children}
            </MuiFormHelperText>
        </Stack>   
    )
}