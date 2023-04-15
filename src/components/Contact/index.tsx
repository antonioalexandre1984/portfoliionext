import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { contact } from "../../data";
import { Store } from "react-notifications-component";
import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com'
import * as z from 'zod'

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;

}

const ContactFormSchema = z.object({
  name: z.string()
    .nonempty('name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters'),
  email: z.string()
    .email()
    .nonempty('name is required')
    .min(3, 'Email must be at least 3 characters')
    .max(50, 'Email must be at most 50 characters'),
  subject: z.string()
    .nonempty('subject is required'),
  message: z.string()
    .nonempty('message cannot be ie empty!')
    .min(3, 'Message must be at least 3 characters')
    .max(500, 'Message must be at most 500 characters')
})

type ContactFormInputs = z.infer<
  typeof ContactFormSchema
>

export function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  });

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [resetForm, setResetForm] = useState(false);

  async function sendContactMail({ name, email, subject, message }: EmailParams) {
    const serviceId = 'service_voek5qi';
    const templateId = 'template_3ym6wmk';
    const userId = 'EvBdnGxQKl1p-deY5';

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          subject,
          message
        },
        userId
      );
      Store.addNotification({
        title: 'Success',
        message: 'Success',
        type: "success",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },
      });
    } catch (e) {
      Store.addNotification({
        title: 'Error',
        message: 'Error',
        type: "danger",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },
      });
      throw e;
    }
  }

  async function onSubmit(data: ContactFormInputs) {
    if (isSubmitting) {
      return;
    }
    setLoading(true)
    setIsSubmitting(true);
    setButtonDisabled(true);
    const { name, email, message, subject } = data
    try {
      await sendContactMail({
        name,
        email,
        subject,
        message
      });
      reset();
      setFormSubmitted(true);

    } catch (e) {
      Store.addNotification({
        title: 'Error',
        message: 'Error',
        type: "danger",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },
      });
    } finally {
      setIsSubmitting(false);
      setButtonDisabled(false);
    }
  }

  useEffect(() => {
    setButtonDisabled(formSubmitted);
  }, [formSubmitted]);

  useEffect(() => {
    if (resetForm) {
      setFormSubmitted(false);
      setResetForm(false);
    }
    setButtonDisabled(false);
  }, [resetForm]);

  function handleFormReset() {
    setIsSubmitting(false);
    setResetForm(true);
  }

  return (
    <section
      id="contact"
      className="section bg-tertiary"
    >
      <div className="container mx-auto">
        <div
          data-aos="fade-down"
          className="flex flex-col items-center text-center">
          <h2
            className="section-title before:content-contact relative before-absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            Contact Me!
          </h2>
          <p className="subtitle">
            Send me a message and i will get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">

          <div
            data-aos="fade-right"
            className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, i) => {
              const { icon, title, description, subtitle } = item;
              return (
                <div key={i} className="flex flex-col lg:flex-row gap-x-4">
                  <div className="text accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl text-[#71706f]">
                    {icon}
                  </div>
                  <div className="">
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">
                      {subtitle || description}
                    </p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            data-aos="fade-up"
            className="space-y-8 w-full max-w-[780px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-8 flex-col md:flex-row">
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-accent font-medium" htmlFor="name">
                  Your Name
                </label>
                <input
                  className={`input ${errors.name ? 'input-error' : ''}`}
                  type="text"

                  placeholder="Your Name"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-red-500 ">{errors.name.message}</span>
                )}
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-accent font-medium" htmlFor="email">
                  Your Email
                </label>
                <input
                  className={`input ${errors.email ? 'input-error' : ''}`}
                  type="email"

                  placeholder="Your Email"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-accent font-medium" htmlFor="subject">
                Subject
              </label>
              <input
                className={`input ${errors.subject ? 'input-error' : ''}`}
                type="text"

                placeholder="Subject"
                {...register("subject")}
              />
              {errors.subject && (
                <span className="text-red-500">{errors.subject.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-accent font-medium" htmlFor="message">
                Your Message
              </label>
              <textarea
                className={`textarea ${errors.message ? 'input-error' : ''}`}

                placeholder="Your Message"
                {...register("message")}
              />
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-accent btn px-4 py-2 rounded-md text-white"
              onClick={handleFormReset}
            >
              Send Message
            </button>
          </form>
        </div >
      </div >
    </section >
  );
}
