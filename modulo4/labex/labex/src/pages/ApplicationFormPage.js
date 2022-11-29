import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForms';



export function ApplicationFormPage (){

    const [form, onChange, clear] = useForm({name: "", age: "", applicationText: "", profession: "", country: "Brasil", trip: ""})

    return <>
    <p>ApplicationFormPage</p>
    <form>
        <label htmlFor='name'>Nome</label>
        <input
                    name="name" 
                    id="name" 
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={onChange}
                    pattern="^/[a-zA-Z]{3,}/"
                    title='Entre o necessário'
                    required 
        />
        <label htmlFor='age'>Idade</label>
        <input
                    name="age" 
                    id="age" 
                    placeholder="Sua idade"
                    value={form.age}
                    onChange={onChange}
                    min={18}
                    max={120}
                    type="number"
                    title='Você precisa ser maior que 18 anos'
                    required 
        />
        <label htmlFor='applicationText'>Por que você merece ir nessa viagem?</label>
        <input
                    name="applicationText" 
                    id="applicationText" 
                    placeholder="Entre a sua justificativa"
                    value={form.applicationText}
                    onChange={onChange}
                    type="text"
                    pattern="^[A-Za-z]{30}$"
                    title='Mínimo de 30 caracteres'
                    required 
        />

        <button type="submit">Enviar </button> 
    </form>
    </>
}
