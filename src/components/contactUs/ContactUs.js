import React, { useRef } from "react";
import handleSubmit from "./handleSubmit";
import classes from './ContactUs.module.css'

export default function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(
      nameRef.current.value,
      emailRef.current.value,
      phoneRef.current.value
    );
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    // <div>
    //   <form onSubmit={submithandler}>
    //     <input type="text" ref={nameRef} placeholder="Name" />
    //     <input type="email" ref={emailRef} placeholder="Email" />
    //     <input type="number" ref={phoneRef} placeholder="Phone" />
    //     <button type="submit">Save</button>
    //   </form>
    // </div>
    <form className={classes.card} onSubmit={submithandler}>
      <span class={classes.card__title}>Contact Us</span>
      <p class={classes.card__content}>
        Got issues? fill the following details and someone from our team will get right back to you
      </p>
      <div class={classes.card__form}>
      <input type="text" ref={nameRef} placeholder="Name" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <input type="number" ref={phoneRef} placeholder="Phone" />
      <button class="sign-up" type="submit"> Submit</button>
      </div>
    </form>
  );
}