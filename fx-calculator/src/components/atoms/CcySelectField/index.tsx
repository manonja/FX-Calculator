import * as React from 'react';
import { FieldProps } from 'formik';

import { Select, MenuItem, InputLabel } from '@material-ui/core';

interface Props extends FieldProps {
    placeholder: string;
}

export const CcySelectField: React.FC<Props> = ({ placeholder, field }) => {
    return (
        <>
            <InputLabel>{placeholder}</InputLabel>
            <Select {...field}>
                <MenuItem value={'GBP'}>GBP</MenuItem>
                <MenuItem value={'EUR'}>EUR</MenuItem>
                <MenuItem value={'USD'}>USD</MenuItem>
            </Select>
        </>
    );
};
