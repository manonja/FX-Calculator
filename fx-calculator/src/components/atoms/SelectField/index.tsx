import * as React from 'react';
import { FieldProps } from 'formik';

import { Select, MenuItem, InputLabel } from '@material-ui/core';

interface Props extends FieldProps {
    placeholder: string;
}

export const SelectField: React.FC<Props> = ({ placeholder, field }) => {
    return (
        <>
            <InputLabel>{placeholder}</InputLabel>
            <Select {...field}>
                <MenuItem value={'GDP'}>GDP</MenuItem>
                <MenuItem value={'EUR'}>EUR</MenuItem>
                <MenuItem value={'USD'}>USD</MenuItem>
            </Select>
        </>
    );
};
