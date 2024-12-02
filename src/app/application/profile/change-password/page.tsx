'use client'
import React, {  useState } from 'react';
import AppLayout from '@/layouts/AppLayout';
import {
    LoadingSpinner,
} from "@/components/materialComponent";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getUserProfile } from '@/lib/utils';

export default function ChangePasswordPage() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errors, setErrors] = useState<{ msg: string }[]>([])
    const [isMatch, setIsMatch] = useState<boolean>(true)
    const [showPassword, setShowPassword] = useState<boolean>(true);
    

    const handleNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrors([])
        setNewPassword(event.target.value)
        setIsMatch(event.target.value === confirmPassword)
        
    }
    const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrors([])
        setConfirmPassword(event.target.value)
        setIsMatch(event.target.value === newPassword)

    }
    const handleChangePassoword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (newPassword === confirmPassword) {
            // Handle password change logic here
            const token = localStorage.getItem("token");
            if (token) {
                const usuario = await getUserProfile({ token });
                console.log("Usuario", usuario);
                try {
                    const response = await fetch("https://downisup-api-production.up.railway.app/api/usuarios/change-password", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id: usuario.id,
                            newPassword: newPassword,
                        })
                    });
                        
                    const data = await response.json();
                    if (!response.ok) {
                        setIsLoading(false);
                        const errorList = data.error ? [data.error] : data.errors;
                        setErrors(e => e.concat(errorList.map((err: { msg: string }) => ({ msg: err.msg })))); // Extract msg from each error object
                        
                        setTimeout(() => {
                            setErrors([]);
                        }, 10000);
                        return;
                    }
                    setIsLoading(false);
                    setIsError(false)
                    setErrors(e => e.concat({ msg: typeof data.message === 'string' ? data.message : JSON.stringify(data.message) })); // Ensure message is a string

                    setTimeout(() => {
                        setErrors([]);
                        window.location.href = "/application";
                    }, 5000);

                } catch (error) {
                    setIsLoading(false);
                    setIsError(true)
                    setErrors(e => e.concat({ msg: "Error al cambiar la contraseña" }));
                }
            }

        } else {
            setIsLoading(false);
            setErrors(e => e.concat({ msg: "Error al cambiar la contraseña" }));
        }
    };
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <AppLayout>
            <section className="w-full h-full flex ">
                <section className="flex flex-col space-y-4">
                    <h1 className="font-bold text-4xl">Cambio de contraseña</h1>
                        <form onSubmit={handleChangePassoword}>
                            <article className="flex flex-col">
                                <article className="flex flex-col gap-y-5">
                                    <Label className="text-lg text-gray-700 mt-5">Nueva Contraseña</Label>
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        name="newPassword"
                                        onChange={handleNewPassword}
                                        className='border-gray-300 border-2 focus:ring-0 outline-0 focus:outline-4 focus:border-blue-700'
                                    />
                                </article>
                                <article className="flex flex-col gap-y-5 mt-5">
                                    <Label className="text-lg text-gray-700">Confirmar Contraseña</Label>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        name="confirmPassword"
                                        onChange={handleConfirmPassword}
                                        className='border-gray-300 border-2 focus:ring-0 outline-0 focus:outline-4 focus:border-blue-700'
                                    />
                                </article>
                                <article>
                                    <button type='button' onClick={handleShowPassword} className="text-blue-600 text-center text-sm m-0">
                                        {showPassword ? "Mostrar Contraseña" : "Ocultar Contraseña"}
                                    </button>
                                </article>
                                <section>
                                </section>
                                {
                                    (errors.length !== 0 || !isMatch) ? (
                                        <Button type='submit' className='mt-5 w-1/2 opacity-40 cursor-not-allowed' disabled>
                                            {isLoading ? <LoadingSpinner /> : "Cambiar"}
                                        </Button>
                                    ) : (
                                        <Button type='submit' className='mt-5 w-1/2'>
                                            {isLoading ? <LoadingSpinner /> : "Cambiar"}
                                        </Button>
                                    )

                                }
                            </article>
                        </form>
                </section>
                <section>
                    {errors && (
                        <section className="flex flex-col gap-y-2 px-6">
                            {errors.map((error, index) => (
                                <p key={index} className={`${!isError ? "bg-green-600" : "bg-red" } transition-all rounded-2xl border ease-in-out delay-200 text-sm text-center font-bold bg-red-600 p-3 my-2 `}>{error.msg}</p>
                            ))}
                        </section>
                    )    
                    }
                </section>
            </section>
        </AppLayout>
    );
};
