import * as React from 'react';
import { TextField } from '@material-ui/core';
import { Formik, Form } from 'formik';

interface Values {
    base: string;
    target: string;
    amount: number;
}

interface FormProps {
    onSubmit: (values: Values) => void;
}

const FXForm: React.FC<FormProps> = ({ onSubmit }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Formik
                initialValues={{ base: '', target: '', amount: 0 }}
                onSubmit={values => {
                    onSubmit(values);
                }}
            >
                {({ values, handleChange, handleBlur }) => (
                    <Form>
                        <div>
                            <TextField
                                placeholder="Choose base"
                                name="base"
                                value={values.base}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <TextField
                                placeholder="Choose target"
                                name="target"
                                value={values.target}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <TextField
                                placeholder="Choose amount"
                                name="amount"
                                value={values.amount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FXForm;
