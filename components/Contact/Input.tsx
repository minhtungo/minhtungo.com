interface InputProps {
  type: string;
  name: string;
  label: string;
  value: string;
  textarea?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => void;
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
    <div className='relative z-0 w-full mb-6 group'>
      {textarea ? (
        <textarea
          name={name}
          id={name}
          value={value}
          className='block py-2 mt-2 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-300 dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0  peer min-h-[100px] resize-y focus:border-black'
          placeholder=' '
        onChange={onChange}
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          className='block py-2 mt-2 px-0 w-full text-sm text-gray-800 dark:text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer'
          placeholder=' '
          value={value}
          onChange={onChange}
          required
        />
      )}

      <label
        htmlFor='name'
        className='peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
