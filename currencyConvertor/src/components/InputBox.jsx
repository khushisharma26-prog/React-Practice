import React, { useId } from "react"; //useid is a react hook which generates unique id .

function InputBox({
  //these are props
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currenyOptions = [], // This is default value, if useforgets <Input />  it return an empty array
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId} // used html for because "for" is a keyword in  js so react uses htmlFor          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId} //id is needed because when use clicks amount label and input is binded
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount} // with this {amount} react controls the value without this browser controls the value
          onChange={
            (
              e, //  react creates an event object which is stored in einside e.target --> that means The element that caused the event is the input.
            ) => onAmountChange && onAmountChange(Number(e.target.value)) //e.target.value --> it responses with a string thus we used Number(e.target.value)
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //"If onAmountChange exists,the call it--> similar way olf writing this is if(onAmountChange) {onAmountChange(Number(e.target.value))}
          disabled={currencyDisable}
        >
          {currenyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
