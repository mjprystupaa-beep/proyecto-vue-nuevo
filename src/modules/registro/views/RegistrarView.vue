<template>

<div>
<h2>Formulario de registro</h2>
<Form :validation-schema="schema" @submit="onSubmit">
    <div class="from">   
      <label for ="nombre">Nombre:</label>
      <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="ingrese su nombre"/>
      <ErrorMessage name="nombre"></ErrorMessage>
    </div>

    <div class="from">
      <label for="correo">Correo:</label>
      <Field v-model="email" type="email" name="email" id="email" placeholder="ingrese su email"/> 
            <ErrorMessage name="email"></ErrorMessage>
  
    </div>
    <div class="from">       
      <button type="submit">Registrar</button>
    </div>

</Form>


</div>


</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import {schema} from '../schemas/validationSchema.js';
import { useRegistrarStore } from '../stores/registrarStore.js';
import {ref} from 'vue';

const registrarStore = useRegistrarStore();

const nombre = ref('');
const email = ref('');



const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    console.log('se ha enviado el formulario');
}

</script>


<style scoped>

.from{
    margin-bottom: 10px;
   
}


</style>

