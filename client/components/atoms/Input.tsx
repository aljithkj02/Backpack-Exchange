
interface IInput {
    type: "text" | "password" | "number";
    className?: string,
    placeholder?: string;
    name: string;
    value: string;
}
export const Input = ({ type, className, placeholder, name, value }: IInput) => {
    return (
        <input 
            type={type} 
            className={`px-2 w-full outline-none rounded-lg ${className}`}
            placeholder={placeholder}
            name={name}
            value={value}
        ></input>
    )
}
