import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Message.css";

const Message = () => {
  return (
    <Formik
      initialValues={{ namn: "", email: "", ämne: "", message: "" }}
      validationSchema={Yup.object({
        namn: Yup.string()
          .max(15, "Måste vara 15 tecken eller mindre!!!")
          .required("Nödvändig"),
        email: Yup.string()
          .email("Ogiltig e-postadress!!!")
          .required("Nödvändig"),
        ämne: Yup.string()
          .max(15, "Måste vara 15 tecken eller mindre!!!")
          .required("Nödvändig"),
        message: Yup.string()
          .min(15, "Måste vara 15 tecken eller mer!!!")
          .required("Nödvändig")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);

        }, 400);
      }}
    >
      <Form className="message">
        <label htmlFor="dittname">Ditt Namn</label>
        <Field name="namn" type="text" />
        <ErrorMessage name="namn" component="p" className="errormessage" />
        <label htmlFor="emailaddress">Din e-post Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="p" className="errormessage" />
        <label htmlFor="ämne">Ämne</label>
        <Field name="ämne" type="text" />
        <ErrorMessage name="ämne" component="p" className="errormessage" />
        <label htmlFor="message">Ditt meddellande</label>
        <Field name="message" type="text" as="textarea" rows="3" />
        <ErrorMessage name="message" component="p" className="errormessage" />
        <button type="submit">Skicka</button>
      </Form>
    </Formik>
  );
};
export default Message;
