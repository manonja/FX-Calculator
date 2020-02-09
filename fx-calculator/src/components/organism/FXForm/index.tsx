import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as React from 'react';
import { InputField } from '../../atoms/InputField';

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
                {({values}) => (
                    <Form>
                        <div>
                            <Field name="base" placeholder="Choose base" component={InputField}></Field>
                        </div>
                        <div>
                            <Field name="target" placeholder="Choose target" component={InputField}></Field>
                        </div>
                        <div>
                            <Field name="amount" placeholder="Amount" component={InputField}></Field>
                        </div>
                        <Button type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FXForm;
