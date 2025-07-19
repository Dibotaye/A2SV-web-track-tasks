import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./ContactForm.css";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      alert(`Thank you, ${data.name}! Your message has been sent.`);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Name <span className="required-field">*</span>
          </label>
          <input
            id="name"
            className="form-input"
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters.",
              },
            })}
            aria-invalid={errors.name ? "true" : "false"}
            aria-errormessage="name-error"
          />
          {errors.name && (
            <p className="error-message" role="alert" id="name-error">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required-field">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address.",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            aria-errormessage="email-error"
          />
          {errors.email && (
            <p className="error-message" role="alert" id="email-error">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Your Message <span className="required-field">*</span>
          </label>
          <textarea
            id="message"
            className="form-textarea"
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters.",
              },
              maxLength: {
                value: 500,
                message: "Message must not exceed 500 characters.",
              },
            })}
            aria-invalid={errors.message ? "true" : "false"}
            aria-errormessage="message-error"
          />
          {errors.message && (
            <p className="error-message" role="alert" id="message-error">
              {errors.message.message}
            </p>
          )}
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
