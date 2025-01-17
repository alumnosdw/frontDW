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
Formulario para agregar y editar estudiantes
*/

const studentSchema = z.object({
    sede: z.enum(
        ["Puerto Ordaz", "BOlivar", "El Callao", "Santa Elena de Guairen", "Upata"],
        {
          message: "La sede ingresada no es válida.",
          required_error: "El sede es requerido",
        }
      ),
    
      carrera: z.enum(
        [
          "Ingeniería Informática",
          "Ingeniería Industrial",
          "Ciencias Fiscales",
          "Contaduria",
          "Administración",
        ],
        {
          message: "La carrera ingresada no es válida.",
          required_error: "El carrera es requerida",
        }
      ),
    
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
    
      cedula: z
        .string({ required_error: "La cedula es querida" })
        .min(8, { message: "La cedula debe tener al menos 8 caracteres" })
        .max(255, { message: "La cedula no puede tener más de 255 caracteres" }),
    
      direccion: z
        .string({ required_error: "La dirección es querida" })
        .min(2, { message: "La dirección debe tener al menos 2 caracteres" })
        .max(255, { message: "La dirección no puede tener más de 255 caracteres" }),
    
      email: z
        .string({ required_error: "El email es querido" })
        .email({ message: "El email debe ser válido" })
        .max(255, { message: "El email no puede tener más de 255 caracteres" }),
    
      fechaNacimiento: z
        .string({ required_error: "La fecha de nacimiento es requerida" })
        .transform((val) => {
          try {
            return new Date(val);
          } catch (error) {
            return undefined;
          }
        })
        .refine(
          (date) => {
            if (!date) return false;
            return date <= new Date();
          },
          {
            message: "La fecha de nacimiento no puede ser en el futuro",
          }
        ),
    
      sexo: z.enum(["Hombre", "Mujer", "Otro"], {
        message: "El sexo ingresado no es valido",
        required_error: "El sexo es requerido",
      }),
    
      estadoCivil: z.enum(["Soltero", "Casado", "Divorciado"], {
        message: "El estado civil ingresado no es valido",
        required_error: "El estado civil es requerido",
      }),
    
      pais: z.enum(
        [
          "Venezuela",
          "Argentina",
          "Brasil",
          "Colombia",
          "México",
          "España",
          "Estados Unidos",
          "Francia",
          "Italia",
          "Japón",
        ],
        {
          message: "El pais  ingresado no es valido",
          required_error: "El pais es requerido",
        }
      ),
    
      estado: z.enum(
        [
          "Venezuela",
          "Argentina",
          "Brasil",
          "Colombia",
          "México",
          "España",
          "Estados Unidos",
          "Francia",
          "Italia",
          "Japón",
        ],
        {
          message: "El estado ingresado no es valido",
          required_error: "El estado es requerido",
        }
      ),
    
      ciudad: z.enum(
        [
          "Venezuela",
          "Argentina",
          "Brasil",
          "Colombia",
          "México",
          "España",
          "Estados Unidos",
          "Francia",
          "Italia",
          "Japón",
        ],
        {
          message: "La ciudad ingresada no es valida",
          required_error: "La ciudad es requerida",
        }
      ),
    });

function FormStudent({ formTitle, initialValues = null }) {

  const form = useForm({
    resolver: zodResolver(studentSchema),
      defaultValues: {
        nombres: initialValues?.nombres || "",
        apellidos: initialValues?.apellidos || "",
        telefono: initialValues?.telefono || "",
        cedula: initialValues?.cedula || "",
        direccion: initialValues?.direccion || "",
        email: initialValues?.email || "",
        sede: initialValues?.sede || "",
        carrera: initialValues?.carrera || "",
        fechaNacimiento: initialValues?.fechaNacimiento || "",
        sexo: initialValues?.sexo || "",
        estadoCivil: initialValues?.estadoCivil || "",
        pais: initialValues?.pais || "",
        estado: initialValues?.estado || "",
        ciudad: initialValues?.ciudad || "",
        },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      console.log(values);

      Swal.fire({
        icon: 'success',
        title: initialValues ? 'Estudiante Editado' : 'Estudiante Creado',
        text: initialValues ? 'El estudiante ha sido editado correctamente.' : 'El estudiante ha sido creado correctamente.',
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


  return (
    <div className="w-full flex flex-col items-center">
      <FormTitle 
        formTitle={formTitle}
        route={"/administrator/estudents"}
      />
      <Form {...form}>
        <form className="w-10/12" onSubmit={onSubmit}>

          <Card className="mb-4">
            <CardHeader className="py-2">
              <CardTitle className="text-xl">Datos Académicos</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-5">
              {/* Select para la sede */}
              <FormField
                control={form.control}
                name="sede"
                render={({ field }) => (
                  <FormItem className="pb-3 flex-1">
                    <FormLabel>Sede:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="border-2 border-gray-400 h-10">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione una sede" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem key="Puerto Ordaz" value="Puerto Ordaz">
                          Puerto Ordaz
                        </SelectItem>
                        <SelectItem key="Bolivar" value="Bolivar">
                          Bolivar
                        </SelectItem>
                        <SelectItem key="El Callao" value="El Callao">
                          El Callao
                        </SelectItem>
                        <SelectItem
                          key="Santa Elena de Guairen"
                          value="Santa Elena de Guairen"
                        >
                          Santa Elena de Guairen
                        </SelectItem>
                        <SelectItem key="Upata" value="Upata">
                          Upata
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Select para la Carrera */}
              <FormField
                control={form.control}
                name="carrera"
                render={({ field }) => (
                  <FormItem className="pb-3 flex-1">
                    <FormLabel>Carrera:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="border-2 border-gray-400 h-10">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione una carrera" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem
                          key="ingInformatica"
                          value="Ingeniería Informática"
                        >
                          Ingeniería Informática
                        </SelectItem>
                        <SelectItem
                          key="ingIndustrial"
                          value="Ingeniería Industrial"
                        >
                          Ingeniería Industrial
                        </SelectItem>

                        <SelectItem
                          key="cienciasFiscales"
                          value="Ciencias Fiscales"
                        >
                          Ciencias Fiscales
                        </SelectItem>

                        <SelectItem key="contaduria" value="Contaduria">
                          Contaduria
                        </SelectItem>

                        <SelectItem key="administracion" value="Administración">
                          Administración
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader className="py-2">
              <CardTitle className="text-xl">Datos Personales</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex gap-8 flex-wrap pb-3">
                {/* Input para los nombres */}
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

                {/* Input para los apellidos */}
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

              {/* Input para el telefono */}
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

                {/* Input para el email */}
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

              {/* Input para la cedula */}
              <div className="flex gap-8 flex-wrap pb-3">
                <FormField
                  name="cedula"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                      <FormLabel className="block">Cedula:</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          className="border-2 border-gray-400 rounded-lg h-10"
                          placeholder="Ingrese su cedula"
                        />
                      </FormControl>
                      {form.formState.errors?.cedula && (
                        <FormDescription className="text-red-500 pb-2">
                          {form.formState.errors?.cedula.message}
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />

                {/* Input para la direccion */}
                <FormField
                  name="direccion"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
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
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader className="py-2">
              <CardTitle className="text-xl">Datos de Nacimiento</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-8 flex-wrap pb-3">
                {/* Input para la fecha de nacimiento */}
                <FormField
                  name="fechaNacimiento"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1">
                      <FormLabel className="block">
                        Fecha de Nacimiento:
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          className="border-2 border-gray-400 rounded-lg h-10"
                        />
                      </FormControl>
                      {form.formState.errors?.fechaNacimiento && (
                        <FormDescription className="text-red-500 pb-2">
                          {form.formState.errors?.fechaNacimiento.message}
                        </FormDescription>
                      )}
                    </FormItem>
                  )}
                />

                {/* Select para el pais */}
                <FormField
                  control={form.control}
                  name="pais"
                  render={({ field }) => (
                    <FormItem className="pb-3 flex-1">
                      <FormLabel>Pais:</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="border-2 border-gray-400 h-10">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un pais" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem key="Venezuela" value="Venezuela">
                            Venezuela
                          </SelectItem>
                          <SelectItem key="Argentina" value="Argentina">
                            Argentina
                          </SelectItem>
                          <SelectItem key="Brasil" value="Brasil">
                            Brasil
                          </SelectItem>
                          <SelectItem key="Colombia" value="Colombia">
                            Colombia
                          </SelectItem>
                          <SelectItem key="México" value="México">
                            México
                          </SelectItem>
                          <SelectItem key="España" value="España">
                            España
                          </SelectItem>
                          <SelectItem
                            key="Estados Unidos"
                            value="Estados Unidos"
                          >
                            Estados Unidos
                          </SelectItem>
                          <SelectItem key="Francia" value="Francia">
                            Francia
                          </SelectItem>
                          <SelectItem key="Italia" value="Italia">
                            Italia
                          </SelectItem>
                          <SelectItem key="Japón" value="Japón">
                            Japón
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center gap-8 flex-wrap pb-3">
                {/* Select para el sexo */}
                <FormField
                  control={form.control}
                  name="sexo"
                  render={({ field }) => (
                    <FormItem className="pb-3 flex-1">
                      <FormLabel>Sexo:</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="border-2 border-gray-400 h-10">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un sexo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem key="hombre" value="Hombre">
                            Hombre
                          </SelectItem>
                          <SelectItem key="mujer" value="Mujer">
                            Mujer
                          </SelectItem>
                          <SelectItem key="otro" value="Otro">
                            Otro
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Select para el estado */}
                <FormField
                  control={form.control}
                  name="estado"
                  render={({ field }) => (
                    <FormItem className="pb-3 flex-1">
                      <FormLabel>Estado:</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="border-2 border-gray-400 h-10">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un estado" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem key="Venezuela" value="Venezuela">
                            Venezuela
                          </SelectItem>
                          <SelectItem key="Argentina" value="Argentina">
                            Argentina
                          </SelectItem>
                          <SelectItem key="Brasil" value="Brasil">
                            Brasil
                          </SelectItem>
                          <SelectItem key="Colombia" value="Colombia">
                            Colombia
                          </SelectItem>
                          <SelectItem key="México" value="México">
                            México
                          </SelectItem>
                          <SelectItem key="España" value="España">
                            España
                          </SelectItem>
                          <SelectItem
                            key="Estados Unidos"
                            value="Estados Unidos"
                          >
                            Estados Unidos
                          </SelectItem>
                          <SelectItem key="Francia" value="Francia">
                            Francia
                          </SelectItem>
                          <SelectItem key="Italia" value="Italia">
                            Italia
                          </SelectItem>
                          <SelectItem key="Japón" value="Japón">
                            Japón
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center gap-8 flex-wrap pb-3">
                {/* Select para el estado civil */}
                <FormField
                  control={form.control}
                  name="estadoCivil"
                  render={({ field }) => (
                    <FormItem className="pb-3 flex-1">
                      <FormLabel>Estado Civil:</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="border-2 border-gray-400 h-10">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un estado civil" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem key="soltero" value="Soltero">
                            Soltero
                          </SelectItem>
                          <SelectItem key="casado" value="Casado">
                            Casado
                          </SelectItem>
                          <SelectItem key="divorciado" value="Divorciado">
                            Divorciado
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Select para la ciudad */}
                <FormField
                  control={form.control}
                  name="ciudad"
                  render={({ field }) => (
                    <FormItem className="pb-3 flex-1">
                      <FormLabel>Ciudad:</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="border-2 border-gray-400 h-10">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione una ciudad" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem key="Venezuela" value="Venezuela">
                            Venezuela
                          </SelectItem>
                          <SelectItem key="Argentina" value="Argentina">
                            Argentina
                          </SelectItem>
                          <SelectItem key="Brasil" value="Brasil">
                            Brasil
                          </SelectItem>
                          <SelectItem key="Colombia" value="Colombia">
                            Colombia
                          </SelectItem>
                          <SelectItem key="México" value="México">
                            México
                          </SelectItem>
                          <SelectItem key="España" value="España">
                            España
                          </SelectItem>
                          <SelectItem
                            key="Estados Unidos"
                            value="Estados Unidos"
                          >
                            Estados Unidos
                          </SelectItem>
                          <SelectItem key="Francia" value="Francia">
                            Francia
                          </SelectItem>
                          <SelectItem key="Italia" value="Italia">
                            Italia
                          </SelectItem>
                          <SelectItem key="Japón" value="Japón">
                            Japón
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <Button className="w-full h-10 text-lg font-bold m-2">
            {initialValues ? 'Editar Estudiante' : 'Agregar Estudiante'}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default FormStudent;