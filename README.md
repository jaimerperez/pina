#Monday 
## Proyecto de Gestión de tareas
 ![Mockup perfil usuario](https://github.com/jaimerperez/pina/blob/c3ee88cd8e05f28750fb650e6bb9f0f1cd5a7773/app/assets/media/Screenshot%202024-03-06%20170304.png)
Proyecto realizado en Vuejs y Symfony PHP:
 * Añadir o eliminar tareas.
 * Añadir o eliminar subtareas
 * Gestión los horarios de las tareas a realizar 
 * Añadir comentarios a las tareas
 * Estado de conexión/horarios de los empleados
 * Solicitud de tareas
 * Posibilidad de establecer el estado de las tareas(pendiente/completada/trabjando)
 * Tareas archivadas
 * Organización por departamentos
 * Crontab con tareas semanales que se crean cada dia/semana/mes
 * Pdf con resumen de las tareas realizas por departamentos y empleados
 * Añadir usuarios/eliminar usuarios en uno o varios departamentos
 * Notificaciones
 * Buzón de mensajes

 ![Mockup buzón]( https://github.com/jaimerperez/pina/blob/1af57016b2a488e6ec2d62c119e0e0779c6783cf/app/assets/media/Screenshot%202024-03-06%20170318.png)
 


# API ENDPOINTS:
**Auth:**
* /api/auth/login  ✅ Devuelve un token para autentificarse **POST: email,password**
* /api/auth/remember_password  ✅ Envia un correo a un usuario con un token para recuperar su contraseña **POST: token,password**
* /api/auth/change_password  ✅ Cambia la contraseña de un usuario confirmado por token **POST: token,password**

**Users:**

| Ruta | Tipo | Parametros | Descripción | Estado |  Info |
|-|-|-|-|-|-|
| /api/users | **GET** | **token** | Devuelve todos los usuarios | ✅| 
| /api/users | **POST** | **email,token** | Crea un usuario | ✅| 
| /api/users/user | **GET** | **token** | Devuelve el usuario del token | ✅| 
| /api/users/user/{id_user}  | **GET** | **token** | Devuelve un usuario | ✅| 
| /api/users/user/{id_user} | **PUT** | **token** | Actualiza un usuario |  ✅| (opcionales): **name, image, surname, birthday, phone, schedule, duty_schedule, duty**|
| /api/users/user/{id_user}/departments  | **GET** | **token** | Devuelve todos los departamentos del usuario | ✅ | |
| /api/users/user/{id_user}/teams  | **GET** | **token** | Devuelve todos los equipos del usuario | ✅ | |

**Departments:**

 Ruta | Tipo | Parametros | Descripción | Estado |  Info |
|-|-|-|-|-|-|
| /api/departments | **GET** | **token** | Devuelve todos los departamentos |✅| 
| /api/departments | **POST** | **name,token** | Crea un departamento |✅| 
| /api/departments/{id_department}  | **GET** | **token** | Devuelve un departamento |✅| 
| /api/departments/{id_department} | **POST** | **token** | Actualiza un departamento |✅| (opcionales): **name**|
| /api/departments/{id_department}/users  | **GET** | **token** | Devuelve todos los usuarios de un departamento |✅| 
| /api/departments/{id_department}/users | **POST** | **id_user,token** | Añade un usuario al departamento |✅|
| /api/departments/{id_department}/teams | **GET** | **token** | Devuelve todos los equipos de un departamento |✅|
| /api/departments/{id_department}/teams | **POST** | **name,token** | Añade un equipo al departamento |✅|

**Teams:**

Ruta | Tipo | Parametros | Descripción | Estado |  Info |
|-|-|-|-|-|-|
| /api/teams | **GET** | **token** | Devuelve todos los equipos |✅|
 /api/teams/team/{id_team}/users  | **GET** | **token** | Devuelve todos los usuarios de un equipo |✅|
| /api/teams/team/{id_team}/users  | **POST** | **token** | Asigna un usuario a un equipo |✅|
| /api/teams/team/{id_team}/tasks  | **GET** | **token** | Devuelve todas las tareas de un equipo |✅|
| /api/teams/team/{id_team}/tasks  | **POST** | **name,text,status,token** | Crea una tarea para un equipo |✅|
