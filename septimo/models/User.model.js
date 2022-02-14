const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      minlength: 4,
      maxlength: 15
    },

    password: {
      type: String,
      minlength: 4,
      maxlength: 15,
      require: true,
      validate: function (password) {
        /*Hemos usado esta expresión regular para validar que la contraseña contiene una minúscula, 
        una mayúscula y un caracter especial. Que no tenga espacios en blanco y 
        que su length sea entre 8 y 20 caracteres.*/
        return /^ (?=.* [0 - 9])(?=.* [a - z])(?=.* [A - Z])(?=.* [@#$%^& -+=()]) (?=\\S + $).{ 8, 20 } $/.test(password)
      }

    },

    favoritesMovies: [String],
    friends: [String],
    rol: String,

    email: {
      type: String,
      trim: true,
      lowercase: true,
      require: [true, 'Introduzca su e-mail'],
      validate: function (email) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)
      },
      imageURL: String,

      birth: {
        type: Date,
        min: '1920-01-01',
        max: Date.now,

        sex: {
          type: String,
          require: true,
          enum: ['hombre', 'mujer', 'otro']
        }
      }

    }

  },

  {
    timestamps: true,
  }
)

const User = model("User", userSchema);

module.exports = User;
