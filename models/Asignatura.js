import { Schema, model, models } from "mongoose";

const AsignaturaSchema = new Schema({

  name: {
    type: String,
    required: [true, "El campo no puede estar vacío,"],
    maxLength: [500, "El máximo de caracteres es 500"],
  },

  credit_units: {
    type: Number,
    required: [true, "El campo no puede estar vacío"],
    min: [1, "El número mínimo de unidades de crédito es 1"],
    max: [4, "El número máximo de unidades de crédito es de 4"],
  },

  teacher: {
    type: String,
    required: [true, "El campo no puede estar vacío"],
    maxLength: [200, "El máximo de caracteres es 200"],
  },

  description: {
    type: String,
    required: [true, "El campo no puede estar vacío"],
    maxLength: [500, "El máximo de caracteres es 500"],
  },

  schedule: {
    type: String,
    required: [true, "El campo no puede estar vacío"],
    maxLength: [200, "El máximo de caracteres es 200"],
  },

  classroom: {
    type: Number,
    required: [true, "El campo no puede estar vacío"],
    min: [1, "El número mínimo de aula es de 1"],
    max: [15, "El número máximo de aula es de 15"],
  },

  prerequisites: {
    type: String,
    required: [true, "El campo no puede estar vacío"],
    maxLength: [500, "El máximo de caracteres es 500"],
  },

  maximum_quota: {
    type: Number,
    required: [true, "El campo no puede estar vacío"],
    min: [1, "El número mínimo de cupos es de 1"],
    max: [40, "El número máximo de cupos es de 40"],
  },

},{
  timestamps:true,
  versionKey:false
})

export default models.Asignatura || model("Asignatura", AsignaturaSchema);