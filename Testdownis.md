## Requerimientos Adicionales para la Aplicación

### Funcionalidad del Perfil de Usuario
* **Validación en tiempo real:** Implementar un mecanismo que valide los datos ingresados en el formulario de perfil de manera instantánea, a medida que el usuario escribe. Utilizar una librería de validación de formularios (ej: jQuery Validation) para agilizar el proceso.
* **Diseño del formulario:** Ajustar el posicionamiento del formulario de perfil para que se muestre en una posición más alta dentro de la página. Reducir el tamaño del formulario para optimizar el espacio en pantalla.
* **Opciones de configuración:** Aumentar la cantidad de opciones personalizables disponibles para el usuario en la sección de ajustes.Agregar boton para volver a iniciar sesion luego de enviar el mail de recuperacion de contrasenia, no permiter que se envian reiterados mails de recuperacion.

### Seguridad y Sesiones
* **Cierre de sesión automático:** Configurar un mecanismo que cierre automáticamente la sesión del usuario si no hay actividad en la aplicación durante un período de 60 minutos.
* **Verificación de correo electrónico:** Implementar una validación para asegurar que el correo electrónico ingresado para la recuperación de contraseña exista en la base de datos del sistema.
* **Verificación de datos reales:** Implementar una validacion para asegurar que los padres sean reales al igual que los hijos que se le asignan.

### Experiencia del Usuario
* **Mensajes de error claros:** Mostrar mensajes de error concisos y fáciles de entender en caso de que se produzcan errores durante la validación o el proceso de recuperación de contraseña.
* **Permitir solicitud de cambio de email o datos de contacto de un usuario:** Permitir que el usuario pueda solicitar al administrador un cambio de informacion de contacto.
* **Limitar Caractares en los campos a rellenar por el usuario:** No permitir que el usuario escriba mas de 250caracteres(sugerencia) en las notas de contacto ya que luego de eso se tendra una cita.
* **Colocar footer en todas las views:** por ejemplo colocar footer en la view de quienes somos.
* **Colocar mapa interactivo de maps en consultorios:** Eliminar la imagen y colocar la ubicacion del maps para poder clickear y que abra el maps 

**Nota:** Son sugerencias puede ser tomadas como no.