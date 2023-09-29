"use Client";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  type: string;
  size: "large" | 'small';
  value: string | string[] | undefined;
  id?: string;
  placeholder: string;
  validation: object;
  lavel?: string;
}

const FormInput = ({
  name, type, size, value, id,
  placeholder,
  validation, lavel
}: IInput) => {
  const { control } = useFormContext();

  return (
    <>
      {lavel ? lavel : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            type={type}
            size={size}
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value}
          />
        )}
      /></>
  );
};

export default FormInput;