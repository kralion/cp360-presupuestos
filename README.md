# 🏗️ CP360 Presupuestos

## Overview

Este proyecto es una aplicación web profesional diseñada para la creación, gestión y cálculo automatizado de presupuestos de construcción, operando bajo una **arquitectura multitenant**. Su objetivo es replicar la funcionalidad central de plataformas como Presupuestos.pe, ofreciendo una herramienta precisa y altamente usable para empresas de ingeniería y construcción.

El enfoque del desarrollo se centra en la **integridad de los datos** y una **experiencia de usuario tipo Excel** para la gestión de partidas.

---

## Stack

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Frontend** | React, Vite, **TypeScript** | Base moderna para la interfaz de usuario. |
| **UI/Estilo** | **Shadcn UI** (vía Shadcn Admin), Tailwind CSS | Componentes robustos y **100% responsivos**. |
| **DataGrid** | **TanStack Table** | Motor *headless* esencial para la edición en línea (tipo Excel) de metrados y ACUs. |
| **Backend/DB** | **Supabase** (PostgreSQL) | Base de datos relacional para integridad y gestión de APIs. |
| **Lógica Crítica**| **PL/pgSQL Triggers** | Garantiza el **re-cálculo automático** y la precisión de todos los costos ante cambios de precios de insumos. |

---

## ✨ Características Clave

1.  **Arquitectura Multitenant Segura:** Aislamiento de datos implementado con **Row-Level Security (RLS)** en PostgreSQL, asegurando que cada empresa solo acceda a sus propios presupuestos e insumos.
2.  **Motor de Cálculo Robusto:** Cálculos de Análisis de Costos Unitarios (ACU) y Costo Total automatizados por *triggers* de base de datos.
3.  **Interfaz Tipo Excel:** Uso de TanStack Table para permitir la **edición de datos en línea** de partidas y ACUs, mejorando la velocidad de trabajo.
4.  **Diseño Responsivo:** Navegación optimizada, utilizando *sidebar* en desktop y **bottom tabs** en móvil.
5.  **Gestión Completa de Catálogos:** Módulos CRUD para `Insumos`, `Partidas` y `Unidades de Medida`.
6.  **Reportes Profesionales:** Exportación de presupuestos y listados consolidados de insumos en formatos **PDF y Excel**.

---

## 🛠️ Instalación y Uso

1.  Clonar este repositorio (después de limpiar el historial de Git).
2.  Configurar las credenciales de Supabase (`.env` file).
3.  Ejecutar el *schema* de PostgreSQL (incluyendo tablas y *triggers*).
4.  Instalar dependencias y levantar el servidor:

```bash
bun install
bun dev
