const allDocData = {
  general: [
    {
      title: "Configuración General",
      items: [
        { name: "Configura tu cuenta", file: "configura-tu-cuenta", section: "general" },
        { name: "Gestión de usuarios", file: "gestion-de-usuarios", section: "general" },
        { name: "Perfil personal", file: "perfil-personal", section: "general" },
      ],
    },
    {
      title: "Seguridad y Privacidad",
      items: [
        { name: "Cambiar contraseña", file: "cambiar-contrasena", section: "general" },
        { name: "Autenticación en dos pasos", file: "autenticacion-dos-pasos", section: "general" },
      ],
    },
  ],

  clientes: [
    {
      title: "Clientes",
      items: [
        { name: "Crear cliente", file: "crear-cliente", section: "clientes" },
        { name: "Dashboard de clientes", file: "dashboard-clientes", section: "clientes" },
      ],
    },
    {
      title: "Soporte al Cliente",
      items: [
        { name: "Tickets de soporte", file: "tickets-soporte", section: "clientes" },
        { name: "Historial de comunicaciones", file: "historial-comunicaciones", section: "clientes" },
      ],
    },
  ],

  ventas: [
    {
      title: "Ventas",
      items: [
        { name: "Crear factura", file: "crear-factura", section: "ventas" },
        { name: "Descuentos y promociones", file: "descuentos-promociones", section: "ventas" },
      ],
    },
    {
      title: "Reportes de Ventas",
      items: [
        { name: "Ventas mensuales", file: "ventas-mensuales", section: "ventas" },
        { name: "Top productos", file: "top-productos", section: "ventas" },
      ],
    },
  ],
};
