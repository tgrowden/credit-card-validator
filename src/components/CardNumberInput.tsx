"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const CardNumberInput = React.forwardRef<HTMLInputElement, {}>(
  function CardNumberInput(_, ref) {
    const { pending } = useFormStatus();

    return (
      <>
        <label
          htmlFor="credit-card-number"
          className="text-left mb-1 text-gray-700 dark:text-white/80"
        >
          Card Number
        </label>

        <input
          className="mb-4 h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          id="credit-card-number"
          type="tel"
          inputMode="numeric"
          pattern="[0-9 ]+"
          autoComplete="cc-number"
          maxLength={19}
          placeholder="xxxx xxxx xxxx xxxx"
          name="cardNumber"
          required
          readOnly={pending}
          ref={ref}
        />
      </>
    );
  }
);

export default CardNumberInput;
