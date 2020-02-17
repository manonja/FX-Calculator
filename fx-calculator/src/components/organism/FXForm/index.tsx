import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as React from 'react';
import { InputField } from '../../atoms/InputField';
import { CcySelectField } from '../../atoms/CcySelectField';

export interface FXFormState {
    from_ccy: string;
    to_ccy: string;
    amount: number;
}

interface FormProps {
    onSubmit: (values: FXFormState) => void;
    state: FXFormState;
}

const FXForm: React.FC<FormProps> = ({ onSubmit, state }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Formik
                initialValues={{ from_ccy: state.from_ccy, to_ccy: state.to_ccy, amount: state.amount }}
                onSubmit={values => {
                    onSubmit(values);
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field
                                name="from_ccy"
                                placeholder="Choose base currency"
                                component={CcySelectField}
                            ></Field>
                        </div>
                        <br />
                        <div>
                            <Field
                                name="to_ccy"
                                placeholder="Choose target currency"
                                component={CcySelectField}
                            ></Field>
                        </div>
                        <br />
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
