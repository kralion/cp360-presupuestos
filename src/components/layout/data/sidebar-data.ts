import {
  LayoutDashboard,
  Database,
  Calculator,
  CreditCard,
  BookOpen,
  Archive,
  BarChart3,
  Settings,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'alejandro',
    email: 'alejandrobravo@gmail.com',
    avatar: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
  },
  projects: [
    {
      name: 'Colegio ABC',
      logo: 'https://img.icons8.com/?size=100&id=inX6oX9dQzDs&format=png&color=000000',
      name_tenant: 'Consorcio ABC',
      id_tenant: '1',
    },
    {
      name: 'Condominio Los Prados',
      logo: 'https://img.icons8.com/?size=100&id=inX6oX9dQzDs&format=png&color=000000',
      name_tenant: 'Consorcio ABC',
      id_tenant: '1',
    },
    {
      name: 'Puente del Inca',
      logo: 'https://img.icons8.com/?size=100&id=inX6oX9dQzDs&format=png&color=000000',
      name_tenant: 'Consorcio ABC',
      id_tenant: '1',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Datos Principales',
          url: '/tasks',
          icon: Database,
        },
        {
          title: 'Presupuesto',
          url: '/apps',
          icon: Calculator,
        },
        {
          title: 'Gastos Generales',
          url: '/chats',
          badge: '3',
          icon: CreditCard,
        },
        {
          title: 'Catálogo de Partidas',
          url: '/users',
          icon: BookOpen,
        },
        {
          title: 'Catálogo de Recursos',
          url: '/users',
          icon: Archive,
        },
        {
          title: 'Reportes',
          url: '/users',
          icon: BarChart3,
        },
        {
          title: 'Configuración',
          url: '/settings',
          icon: Settings,
        },
      ],
    },
  ],
}
