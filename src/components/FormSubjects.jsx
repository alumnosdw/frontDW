"use client";
import React from "react";
import FormTitle from "@/components/FormTitle";
import { Card, CardContent } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Swal from "sweetalert2";

/* 
Formulario para agregar y editar materias
*/



const subjectSchema = z.object({
    nombre: z
      .string({ required_error: "El nombre de la materia es requerido" })
      .min(2, {
        message: "El nombre de la materia debe tener al menos 2 caracteres",
      })
      .max(255, {
        message: "El nombre de la materia no puede tener más de 255 caracteres",
      }),
  
      unidadesCredito: z
      .string({ required_error: "Las unidades de creditos son requeridas" })
      .refine((value) => {
        const parsedValue = parseInt(value, 10);
        return !isNaN(parsedValue) && parsedValue > 0 && Number.isInteger(parsedValue) && parsedValue <= 5;
      }, {
        message: "Las unidades de crédito deben ser un número entero positivo entre 1 y 5.",
      }),
  
    profesor: z
      .string({ required_error: "El profesor es querido" })
      .min(2, { message: "El profesor debe tener al menos 2 caracteres" })
      .max(255, { message: "El profesor no puede tener más de 255 caracteres" })
      .refine(
        (value) => value !== "Seleccione un profesor",
        "Debe seleccionar un profesor",
        { message: "Por favor seleccione un profesor valido" }
      ),
  
    descripcion: z
      .string({ required_error: "La descripcion es querida" })
      .min(2, { message: "La descripcion debe tener al menos 2 caracteres" })
      .max(255, {
        message: "La descripcion no puede tener más de 255 caracteres",
      }),
  
    horario: z
      .string({ required_error: "El horario es querido" })
      .min(2, { message: "El horario debe tener al menos 2 caracteres" })
      .max(255, { message: "El horario no puede tener más de 255 caracteres" }),
  
    aula: z
      .string({ required_error: "El aula es querido" })
      .min(2, { message: "El aula debe tener al menos 2 caracteres" })
      .max(255, { message: "El aula no puede tener más de 255 caracteres" }),
  
    prerrequisitos: z
      .string({ required_error: "Los prerrequisitos son queridos" })
      .min(2, { message: "Los prerrequisitos debe tener al menos 2 caracteres" })
      .max(255, {
        message: "Los prerrequisitos no puede tener más de 255 caracteres",
      }),
  
    cupos: z
    .string({ required_error: "Las unidades de creditos son requeridas" })
    .refine((value) => {
      const parsedValue = parseInt(value, 10);
      return !isNaN(parsedValue) && parsedValue > 0 && Number.isInteger(parsedValue);
    }, {
      message: "Los cupos de la materia deben ser mayores a 0",
    }),
  });

function FormSubject({ formTitle,  initialValues = null }) {

  const form = useForm({
    resolver: zodResolver(subjectSchema),
        defaultValues: {
        nombre: initialValues?.nombre || "",
        unidadesCredito: initialValues?.unidadesCredito || "",
        profesor: initialValues?.profesor || "",
        descripcion: initialValues?.descripcion || "",
        horario: initialValues?.horario || "",
        aula: initialValues?.aula || "",
        prerrequisitos: initialValues?.prerrequisitos || "",
        cupos: initialValues?.cupos || "",
        },
    });


  const onSubmit = form.handleSubmit(async (values) => {
    try {
        console.log(values);

        Swal.fire({
          icon: 'success',
          title: initialValues ? 'Materia editada' : 'Materia Creada',
          text: initialValues ? 'La materia ha sido editada correctamente.' : 'La materia ha sido creada correctamente.',
          confirmButtonText: 'Ok',
        });
        
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.',
            confirmButtonText: 'Ok'
          });
      }
    });

  const profesores = [
    "Juan Perez",
    "Maria Garcia",
    "Carlos Rodriguez",
    "Ana Martinez",
    "Luis Hernandez",
    "Sofia Lopez",
    "David Sanchez",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <FormTitle
        formTitle={formTitle}
        route={"/administrator/subjects"}
      />
      <Form {...form}>
        <form className="w-10/12 flex flex-col" onSubmit={onSubmit}>
          <Card className="p-4">
            <CardContent className="flex flex-col gap-3">
              {/* Input para el nombre de la materia */}
              <FormField
                name="nombre"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block">
                      Nombre de la materia:
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-2 border-gray-400 rounded-lg h-10"
                        placeholder="Ingrese el nombre de la materia"
                      />
                    </FormControl>
                    {form.formState.errors?.nombre && (
                      <FormDescription className="text-red-500 pb-2">
                        {form.formState.errors?.nombre.message}
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />

              {/* Input para las unidades de credito */}
              <FormField
                name="unidadesCredito"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block">
                      Unidades de credito:
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        className="border-2 border-gray-400 rounded-lg h-10"
                        placeholder="Ingrese las unidades de creditos"
                      />
                    </FormControl>
                    {form.formState.errors?.unidadesCredito && (
                      <FormDescription className="text-red-500 pb-2">
                        {form.formState.errors?.unidadesCredito.message}
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />

              {/* Selec para asignar un profesor */}
              <FormField
                control={form.control}
                name="profesor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profesor:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="border-2 border-gray-400 h-10">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un profesor" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {profesores.map((profesor) => (
                          <SelectItem key={profesor} value={profesor}>
                            {profesor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Text area para la descripcion */}
              <FormField
                name="descripcion"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block">Descripción:</FormLabel>
                    <FormControl className="w-full">
                      <textarea
                        {...field}
                        className="p-2 border-2 border-gray-400 rounded-lg h-16 resize-none"
                        placeholder="Ingrese la descripcion de la materia"
                      />
                    </FormControl>
                    {form.formState.errors?.descripcion && (
                      <p className="text-red-500">
                        {form.formState.errors?.descripcion.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              {/* Input para el horario de la materia */}
              <FormField
                name="horario"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block">
                      Horario:
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-2 border-gray-400 rounded-lg h-10"
                        placeholder="Ingrese el horario de la materia"
                      />
                    </FormControl>
                    {form.formState.errors?.horario && (
                      <FormDescription className="text-red-500 pb-2">
                        {form.formState.errors?.horario.message}
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />

              {/* Input para el aula de la materia */}
              <FormField
                name="aula"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block">
                      Aula:
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-2 border-gray-400 rounded-lg h-10"
                        placeholder="Ingrese el aula de la materia"
                      />
                    </FormControl>
                    {form.formState.errors?.aula && (
                      <FormDescription className="text-red-500 pb-2">
                        {form.formState.errors?.aula.message}
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />

              {/* Input para los prerrequisitos de la materia */}
              <FormField
                name="prerrequisitos"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block">
                      Prerrequisitos de la materia:
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-2 border-gray-400 rounded-lg h-10"
                        placeholder="Ingrese los prerrequisitos de la materia"
                      />
                    </FormControl>
                    {form.formState.errors?.prerrequisitos && (
                      <FormDescription className="text-red-500 pb-2">
                        {form.formState.errors?.prerrequisitos.message}
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />


              {/* Input para los cupos de la materia */}
              <FormField
                name="cupos"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block">
                      Cupos:
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        className="border-2 border-gray-400 rounded-lg h-10"
                        placeholder="Ingrese los cupos de la materia"
                      />
                    </FormControl>
                    {form.formState.errors?.cupos && (
                      <FormDescription className="text-red-500 pb-2">
                        {form.formState.errors?.cupos.message}
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Button className="w-full h-10 text-lg font-bold m-2 self-center">
              {initialValues ? 'Editar Materia' : "Agregar Materia"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default FormSubject;