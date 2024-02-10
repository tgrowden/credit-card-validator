"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const CardNumberInput = React.forwardRef<HTMLInputElement, {}>(
  function CardNumberInput(_, ref) {
    const { pending } = useFormStatus();

    return (
      <div className="mb-4 w-full flex flex-col">
        <label
          htmlFor="credit-card-number"
          className="text-left mb-1 text-gray-700 dark:text-white/80"
        >
          Card Number
        </label>

        <input
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          id="credit-card-number"
          type="tel"
          inputMode="numeric"
          pattern="([0-9\-\s]+)"
          autoComplete="cc-number"
          maxLength={19}
          placeholder="xxxx xxxx xxxx xxxx"
          name="cardNumber"
          required
          readOnly={pending}
          ref={ref}
        />

        <span className="text-sm text-gray-500 text-left cursor-default">
          Enter numbers, spaces, or dashes
        </span>
      </div>
    );
  }
);

export default CardNumberInput;
