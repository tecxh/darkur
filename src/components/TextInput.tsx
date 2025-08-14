import { Input } from "@base-ui-components/react";

interface TextInputProps {
    placeholder: string;
    onChange: () => void;
    value?: string;
}

export const TextInput = (props: TextInputProps) => {
    const { placeholder, onChange, value = '' } = props;
    return (
        <Input placeholder={placeholder} onValueChange={onChange} defaultValue={value} />
    )
}