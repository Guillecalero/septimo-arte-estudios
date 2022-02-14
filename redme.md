##endpointsTable

| Route     | HTTP Verb | Description     | Protected  |
| --------- | --------- | --------------- | ---------- |

| `/` | GET | Landing page | Abierta |
| `/registro` | GET | Formulario de registro | Abierta |
| `/registro`| POST | Formulario de registro | Abierta |
| `/acceso` | GET | Formulario de acceso | Abierta |
| `/acceso` | POST |Formulario de registro | Abierta |
| `/cerrar-sesion`| POST | Cerrar sesión | Abierta |
| `/perfil/:id` | GET | Perfil del usuario | Protegida |
| `/perfil/eliminar/:id` | POST | Eliminar perfil del usuario | Protegida |
| `/perfil/editar/:id` | GET | Editar perfil de usuario | Protegida |
| `/perfil/editar/:id` | POST | Editar perfil de usuario | Protegida |
| `/peliculas` | GET | Lista de películas | Protegida |
| `/peliculas`| POST | Consulta de películas queryString| Protegida |
| `/peliculas/ficha/:id`| GET | Ficha de películas mostrar usuarios afines a las películas | Protegida |
| `/peliculas/ficha/usuario/:id`| POST | Añadir usuario a tu lista de amig@s | Protegida |
| `/email/:id`| POST | Email de confirmación de registro | Protegida |

