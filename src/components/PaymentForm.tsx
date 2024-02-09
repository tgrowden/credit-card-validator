"use client";

import React from "react";
import clsx from "clsx";

import SubmitButton from "./SubmitButton";
import CardNumberInput from "./CardNumberInput";

export interface PaymentFormProps {
  /**
   * Props passed to the form element
   */
  formProps?: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;

  /**
   * The ref to the input element
   */
  inputRef?: React.Ref<HTMLInputElement>;
}

export default function PaymentForm({ formProps, inputRef }: PaymentFormProps) {
  return (
    <section className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
      <form
        {...formProps}
        className={clsx("flex flex-col", formProps?.className)}
      >
        <CardNumberInput ref={inputRef} />

        <SubmitButton />
      </form>
    </section>
  );
}
