import React from "react";
import Image from "next/image";
import { brands } from "../../data";

export function Brands() {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center">
      <div
        data-aos="fade-down"
        className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-center w-28 md:w-32 h-16 md:h-20"
            >
              <Image src={brand.img} alt="Freelancer" />
            </div>
          );
        })}
      </div>
    </section>
  );
}


/*   async function onSubmit(contactInfo: Contact) {
    setLoading(true);
 
    if (!contactInfo.name.trim() || !contactInfo.email.trim() || !contactInfo.message.trim()) {
      Store.addNotification({
        title: "Warning!",
        message: "Please fill in all the required fields.",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      setLoading(false);
      return;
    }
 
 
    if (!/\S+@\S+\.\S+/.test(contactInfo.email)) {
      Store.addNotification({
        title: "Error!",
        message: "Please enter a valid email address.",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      setLoading(false);
      return;
    }
 
    try {
      await sendContactMail(contactInfo);
 
      reset({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      Store.addNotification({
        title: "Error!",
        message: "Failed to authenticate user!",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },
 
      });
 
    } finally {
      setLoading(false);
    }
  } */

/*
  useEffect(() => {
    if (formSubmitted && Object.keys(errors).length === 0) {
      setFormSubmitted(false);
    }
  }, [errors, formSubmitted]); */
