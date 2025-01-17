"use client";
import React from "react";
import FormTitle from "@/components/FormTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
Formulario para agregar y editar profesores
*/

const professorSchema = z.object({
    nombres: z
        .string({ required_error: "Los nombres son requeridos" })
        .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
        .max(255, { message: "El nombre no puede tener más de 255 caracteres" }),

    apellidos: z
        .string({ required_error: "Los apellidos son requeridos" })
        .min(2, { message: "El apellido debe tener al menos 2 caracteres" })
        .max(255, { message: "El apellido no puede tener más de 255 caracteres" }),

    telefono: z
        .string({ required_error: "El telefono es querido" })
        .min(11, { message: "El teléfono  debe tener al menos 11 caracteres" })
        .max(255, { message: "El telefono no puede tener más de 255 caracteres" }),

    direccion: z
        .string({ required_error: "La dirección es querida" })
        .min(2, { message: "La dirección debe tener al menos 2 caracteres" })
        .max(255, { message: "La dirección no puede tener más de 255 caracteres" }),

    email: z
        .string({ required_error: "El email es querido" })
        .email({ message: "El email debe ser válido" })
        .max(255, { message: "El email no puede tener más de 255 caracteres" }),

    departamento: z.enum(
        ["Matemáticas", "Informática", "Computación", "Física", "Química"],
        {
            message: "El departamento ingresado no es válido.",
            required_error: "El departamento es requerido",
        }
    ),

    estatus: z.enum(["Activo", "Inactivo"], {
        message: "El estatus ingresado no es válido",
        required_error: "Es estatus es requerido",
    }),

    titulacion: z
        .string({ required_error: "La titulación es querida" })
        .min(2, { message: "La titulación debe tener al menos 2 caracteres" })
        .max(255, {
            message: "La titulación no puede tener más de 255 caracteres",
        }),

    especialidad: z
        .string({ required_error: "La especialidad es querida" })
        .min(2, { message: "La especialidad debe tener al menos 2 caracteres" })
        .max(255, {
            message: "La especialidad no puede tener más de 255 caracteres",
        }),
});

function FormProfessor({formTitle, initialValues = null}) {
    const form = useForm({
      resolver: zodResolver(professorSchema),
      defaultValues: {
        nombres: initialValues?.nombres || "",
        apellidos: initialValues?.apellidos || "",
        telefono: initialValues?.telefono || "",
        direccion: initialValues?.direccion || "",
        email: initialValues?.email || "",
        departamento: initialValues?.departamento || "",
        estatus: initialValues?.estatus || "",
        titulacion: initialValues?.titulacion || "",
        especialidad: initialValues?.especialidad || "",
      },
    });

    const onSubmit = form.handleSubmit(async (values) => {
      try {
        console.log(values);

        Swal.fire({
          icon: 'success',
          title: initialValues ? 'Profesor Editado' : 'Profesor Creado',
          text: initialValues ? 'El profesor ha sido editado correctamente.' : 'El profesor ha sido creado correctamente.',
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

  const departamentos = [
    "Matemáticas",
    "Informática",
    "Computación",
    "Física",
    "Química",
  ];

  const estatues = ["Activo", "Inactivo"];

  return (
    <div className="w-full flex flex-col items-center">
      <FormTitle 
      formTitle={formTitle}
      route={"/administrator/professors"}
      />

      <Form {...form}>
        <form action="" onSubmit={onSubmit} className="w-10/12 ">
          <Card className="mb-4">
            <CardHeader className="py-2">
              <CardTitle className="text-xl">Datos Personales</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex gap-8 flex-wrap pb-3">
                <FormField
                  name="nombres"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                      <FormLabel className="block">Nombres:</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          className="border-2 border-gray-400 rounded-lg h-10"
                          placeholder="Ingrese sus nombres"
                        />
                      </FormControl>
                      {form.formState.errors?.nombres && (
                        <FormDescription className="text-red-500 pb-2">
                          {form.formState.errors?.nombres.message}
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  name="apellidos"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                      <FormLabel className="block">Apellidos:</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          className="border-2 border-gray-400 rounded-lg h-10"
                          placeholder="Ingrese sus apellidos"
                        />
                      </FormControl>
                      {form.formState.errors?.apellidos && (
                        <FormDescription className="text-red-500 pb-2">
                          {form.formState.errors?.apellidos.message}
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex gap-8 flex-wrap pb-3">
                <FormField
                  name="telefono"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                      <FormLabel className="block">Telefono:</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          className="border-2 border-gray-400 rounded-lg h-10"
                          placeholder="Ingrese su telefono"
                        />
                      </FormControl>
                      {form.formState.errors?.telefono && (
                        <FormDescription className="text-red-500 pb-2">
                          {form.formState.errors?.telefono.message}
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                      <FormLabel className="block">Email:</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          className="border-2 border-gray-400 rounded-lg h-10"
                          placeholder="Ingrese su email"
                        />
                      </FormControl>
                      {form.formState.errors?.email && (
                        <FormDescription className="text-red-500 pb-2">
                          {form.formState.errors?.email.message}
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="direccion"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block">Dirección:</FormLabel>
                    <FormControl className="w-full">
                      <textarea
                        {...field}
                        className="p-2 border-2 border-gray-400 rounded-lg h-16 resize-none"
                        placeholder="Ingrese su dirección"
                      />
                    </FormControl>
                    {form.formState.errors?.direccion && (
                      <p className="text-red-500">
                        {form.formState.errors?.direccion.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader className="py-2">
              <CardTitle className="text-xl">Datos Academicos</CardTitle>
            </CardHeader>

            <CardContent>
              <FormField
                control={form.control}
                name="departamento"
                render={({ field }) => (
                  <FormItem className="pb-3">
                    <FormLabel>Departamento:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="border-2 border-gray-400 h-10">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un departamento" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {departamentos.map((departamento) => (
                          <SelectItem key={departamento} value={departamento}>
                            {departamento}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="estatus"
                render={({ field }) => (
                  <FormItem className="pb-3">
                    <FormLabel>Estatus:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="border-2 border-gray-400 h-10">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un estatus" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {estatues.map((estatus) => (
                          <SelectItem key={estatus} value={estatus}>
                            {estatus}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="titulacion"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="pb-3">
                    <FormLabel className="block">Titulacion:</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-2 border-gray-400 rounded-lg h-10"
                        placeholder="Ingrese la titulación que posee"
                      />
                    </FormControl>
                    {form.formState.errors?.titulacion && (
                      <FormDescription className="text-red-500 pb-2">
                        {form.formState.errors?.titulacion.message}
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                name="especialidad"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="pb-3">
                    <FormLabel className="block">Especidalidad:</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-2 border-gray-400 rounded-lg h-10"
                        placeholder="Ingrese el area en la que se especializa"
                      />
                    </FormControl>
                    {form.formState.errors?.especialidad && (
                      <FormDescription className="text-red-500 pb-2">
                        {form.formState.errors?.especialidad.message}
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Button className="w-full h-10 text-lg font-bold">{initialValues ? 'Editar Profesor' : 'Agregar Profesor'}</Button>
        </form>
      </Form>
    </div>
  );
}

export default FormProfessor;