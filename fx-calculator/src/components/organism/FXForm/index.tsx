import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as React from 'react';
import { InputField } from '../../atoms/InputField';
import { CcySelectField } from '../../atoms/CcySelectField';
import { FXUIState } from '../../../context'

// import { AppContextConsumer } from '../../../context';

interface FormProps {
    onSubmit: (values: FXUIState) => void;
    state: FXUIState;
}

const FXForm: React.FC<FormProps> = ({ onSubmit, state }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            {/* <AppContextConsumer>{appContext => appContext && ( */}

            <Formik
                // initialValues={{ from_ccy: appContext.from_ccy, to_ccy: appContext.to_ccy, amount: appContext.amount }}
                initialValues={{from_ccy: state.from_ccy, to_ccy: state.to_ccy, amount: state.amount, conversion_rate: 1.1 }}
                onSubmit={values => {
                    onSubmit(values);
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field name="from_ccy" placeholder="Choose base currency" component={CcySelectField}></Field>
                        </div>
                        <br/>
                        <div>
                            <Field name="to_ccy" placeholder="Choose target currency" component={CcySelectField}></Field>
                        </div>
                        <br/>
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
