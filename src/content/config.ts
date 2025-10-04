import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    schema: z.object({
        title: z.string(), //Título del proyecto
        priority: z.number(), //Prioridad del proyecto
        date: z.string(), //Fecha de creación
        img: z.string(), //Imagen del proyecto
        description: z.string(), //Descripción del proyecto
        tools: z.array(z.string()).optional(), // 👈 opcional (Herramientas utilizadas)
        designs: z.array(z.string()).optional(), // 👈 opcional (Diseños del proyecto, imágenes)
        video: z.array(z.string()).optional(), // 👈 opcional (Videos del proyecto)
    }),
});

const experiences = defineCollection({
    schema: z.object({
        title: z.string(), //Título de la experiencia
        priority: z.number(), //Prioridad de la experiencia
        date: z.string(), //Fecha de creación
        archivo: z.string().optional(), // 👈 opcional (Archivo del proyecto)
        working: z.boolean().optional(), // 👈 opcional (¿Trabajando en la experiencia?)
        type: z.enum(["work", "book"]), // tipo de experiencia (trabajo o estudios)
    }),
});

export const collections = { projects, experiences };

