import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as React from 'react';
import { InputField } from '../../atoms/InputField';
// import { AppContextConsumer } from '../../../context';

interface Values {
    from_currency: string;
    to_currency: string;
    amount: number;
}

interface FormProps {
    onSubmit: (values: Values) => void;
}

const FXForm: React.FC<FormProps> = ({ onSubmit }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            {/* <AppContextConsumer>{appContext => appContext && ( */}

            <Formik
                // initialValues={{ from_currency: appContext.from_currency, to_currency: appContext.to_currency, amount: appContext.amount }}
                initialValues={{from_currency: 'EUR', to_currency: 'GBP', amount: 100, conversion_rate: 1.1 }}
                onSubmit={values => {
                    onSubmit(values);
                }}
            >
                {({values}) => (
                    <Form>
                        <div>
                            <Field name="from_currency" placeholder="Choose base currency" component={InputField}></Field>
                        </div>
                        <div>
                            <Field name="to_currency" placeholder="Choose target currecy" component={InputField}></Field>
                        </div>
                        <div>
                            <Field name="amount" placeholder="Amount" component={InputField}></Field>
                        </div>
                        <Button type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
            {/* )} */}
            {/* </AppContextConsumer> */}

        </div>
    );
};

export default FXForm;
