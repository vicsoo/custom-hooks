import React, { useState } from 'react'

export const useForm = ( initialForm = {} ) => { // le estoy iniciando el valor de mi form, ahora es vacio

	const [ formState, setFormState ] = useState( initialForm );

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,  // con este spread, mando todos los propiedades del state
			[ name ]: value,
		})
	}

	const onResetForm = () => {
		setFormState( initialForm );
	}

	// voy a retornar un objeto
	// estoy retornando el estado y dos funciones
  return {
		...formState, // estoy desesctruturando el formState y retornando las propiedades definidas en el valor inicial del 'useForm'
		formState,
		onInputChange,
		onResetForm,
	}
}
