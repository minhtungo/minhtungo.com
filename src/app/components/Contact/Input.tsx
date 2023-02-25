interface InputProps {
  type?: string;
  name: string;
  label: string;
  value: string;
  textarea?: boolean;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Input = ({
  type,
  name,
  onChange,
  label,
  value,
  textarea,
}: InputProps) => {
  return (
    <div className='group relative z-0 mb-6 w-full'>
      {textarea ? (
        <textarea
          name={name}
          id={name}
          value={value}
          className='peer mt-2 block min-h-[100px] w-full resize-y appearance-none border-b border-gray-300 bg-transparent py-2 px-0 text-sm text-gray-800 focus:border-black focus:outline-none  focus:ring-0 dark:border-gray-600 dark:text-gray-300 dark:focus:border-white'
          placeholder=' '
          onChange={onChange}
          required
          aria-label={label}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          className='peer mt-2 block w-full appearance-none border-b border-gray-300 bg-transparent py-2 px-0 text-sm text-gray-800  focus:border-black focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-300 dark:focus:border-white'
          placeholder=' '
          value={value}
          onChange={onChange}
          required
          aria-label={label}
        />
      )}

      <label
        htmlFor={name}
        className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white'
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
