'use client'
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useToast } from '../../../components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { InputField, TextAreaField } from './Input';

const initValues = { firstname: "", lastname: "", email: "", phone: "", message: "" }
const initState = { values: initValues, isLoading: false }

const ContactForm = () => {
    const [state, setState] = useState(initState);
    const { values, isLoading } = state;
    const { toast } = useToast()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                [name]: value,
            }
        }));
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState((prevState) => ({ ...prevState, isLoading: true }));

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                toast({
                    description: "Your message has been sent successfully!",
                })
                setState(initState); // Reset form
            } else {

                toast({
                    description: 'Failed to send your message. Please try again.',
                })
            }
        } catch (error) {
            console.error('Error:', error);
            toast({
                description: 'An error occurred. Please try again.',
            })
        } finally {
            setState((prevState) => ({ ...prevState, isLoading: false }));
        }

    }

    return (
        <div className="w-full">
            <header>
                <h2 className="text-muted-foreground my-10 text-3xl">Contact</h2>
            </header>
            <form onSubmit={onSubmit} className="w-full space-y-6">
                <div className="w-full flex flex-col sm:flex-row gap-6 text-sm">
                    <InputField
                        label="Your first name"
                        name="firstname"
                        type='text'
                        value={values.firstname}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Your last name"
                        name="lastname"
                        type='text'
                        value={values.lastname}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full flex flex-col sm:flex-row gap-6 text-sm">
                    <InputField
                        label="Your email address"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Your phone number"
                        name="phone"
                        type="number"
                        additionalProps={{ step: 1 }}
                        value={values.phone}
                        onChange={handleChange}
                    />
                </div>

                <TextAreaField
                    label="Your message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                />

                <Button
                    size='xl'
                    disabled={isLoading || !values.firstname || !values.lastname || !values.email || !values.phone || !values.message}
                    type='submit'
                    className="text-lg md:text-xl cursor-pointer shadow-md"
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                        </span>
                    ) : (
                        "Submit Now"
                    )}
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
