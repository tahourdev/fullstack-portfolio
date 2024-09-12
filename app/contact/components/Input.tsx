import React from 'react';
type InputProps = {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    className?: string;
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    additionalProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

type TextAreaProps = {
    label: string;
    name: string;
    required?: boolean;
    className?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    additionalProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

const InputField: React.FC<InputProps> = ({ label, name, type = 'text', required = true, className = 'form-input', additionalProps, value, onChange }) => (
    <div className="w-full">
        <label>
            {label}<span className="text-primary">*</span>
        </label>
        <input name={name} required={required} type={type} className={className} value={value} onChange={onChange} {...additionalProps} />
    </div>
);

const TextAreaField: React.FC<TextAreaProps> = ({ label, name, required = true, className = 'form-input resize-none h-28', value, onChange, additionalProps }) => (
    <div className="w-full text-sm">
        <label>
            {label}<span className="text-primary">*</span>
        </label>
        <textarea name={name} required={required} className={className} value={value} onChange={onChange} {...additionalProps} />
    </div>
);

export { InputField, TextAreaField }
