import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectType {
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl: string;
  features: string[];
}

// Datos de los proyectos enriquecidos con más detalles para el modal.
const projects: ProjectType[] = [
  {
    title: "Factoring Interactive",
    description: "Administre su negocio de factoraje, gestione líneas de crédito, cobranza y contabilidad para optimizar la liquidez de los proveedores.",
    imageUrl: "/img/primer-plano-de-hombre-de-negocios-con-tableta-digital.jpg",
    downloadUrl: "/DOC/GSC Factoring Interactive.pdf",
    features: [
      "Gestión de líneas de crédito para descuento de facturas.",
      "Contabilidad en línea por cada operación realizada.",
      "Exportación de pólizas a sistemas contables.",
      "Módulo de cobranza para administración de cartera.",
      "Auditoría y registro de cada operación.",
      "Notificaciones a deudores y gestión de intereses."
    ]
  },
  {
    title: "Sistema de Habilitación de Almacenes",
    description: "Gestione inventarios como garantía para financiamiento. Controle entradas, salidas y pignoración de almacenes en tiempo real.",
    imageUrl: "/img/0eac3f84-b4f0-4f55-aad7-ff03fa01111c.jpeg",
    downloadUrl: "/DOC/GSC Habilitacion de Almacenes_brochure.pdf",
    features: [
      "Control de inventario en tiempo real mediante app móvil.",
      "Manejo de garantías (inmobiliarias, a granel, vehículos, etc.).",
      "Autorización de firma digital y módulo de riesgo.",
      "Digitalización y almacenamiento de documentos.",
      "Generación de certificados de depósito.",
      "Facturación para clientes y para la UEPI."
    ]
  },
  {
    title: "Leasing Interactive",
    description: "Automatice las operaciones de su empresa de arrendamiento. Genere cotizaciones, tablas de amortización, facturación y gestione la cobranza.",
    imageUrl: "/img/contract-1464917_1280.jpg",
    downloadUrl: "/DOC/GSC Leasing Interactive nuevo.pdf",
    features: [
        "Simulador de cotizaciones y generación de tablas de amortización. ",
        "Gestión de órdenes de compra y pago.",
        "Control de activos como edificaciones, maquinaria y vehículos.",
        "Módulo de cobranza con cálculo de intereses moratorios.",
        "Interfaces con sistemas contables, de riesgo y de impuestos.",
        "Seguimiento a la documentación y control de pólizas."
    ]
  },
  {
    title: "Sistema de Descarga de Barcos",
    description: "Coordine y controle la descarga de mercancía de buques, administre el Bill of Lading, la distribución y el transporte terrestre.",
    imageUrl: "/img/f35e19a7-c8b7-4873-9e03-6862c60ae6f5.jpeg",
    downloadUrl: "/DOC/Sistema de Descarga de Barcos Interactive.pdf",
    features: [
        "Gestión de ingreso de buques y bodegas.",
        "Asignación y distribución de Bill of Lading (BL).",
        "Control de entrada y salida de camiones en muelle.",
        "Generación de conduces de despacho y recibo.",
        "Reportes de estado de descarga por recibidor y producto.",
        "Interfaz móvil para supervisores en campo."
    ]
  },
  {
  "title": "Sistema de Licitación Interactive",
  "description": "Genere y gestione licitaciones de forma eficiente. Controle clientes, suplidores y artículos, convierta solicitudes en facturas y administre las cuentas por cobrar y por pagar.",
  "imageUrl": "/img/WhatsApp Image 2025-07-31 at 10.16.30 PM (1).jpeg",
  "downloadUrl": "/DOC/Licitacion Interactive (1).pdf",
  "features": [
    "Generación rápida de formatos para licitaciones.",
    "Gestión de clientes, suplidores y catálogo de artículos.",
    "Emisión de conduces para entrega de productos.",
    "Conversión de solicitud a factura con generación de Cuentas por Cobrar (CxC).",
    "Control de consecutivos de Números de Comprobante Fiscal (NCF).",
    "Generación y gestión de Cuentas por Pagar (CxP).",
    "Reportes de antigüedad de saldos para CxC y CxP.",
    "Seguimiento y reportes del estado de las licitaciones (ganadas, perdidas, en curso)."
  ]
},
 {
  "title": "Sistema de Facturación Electrónica Interactive",
  "description": "Genere facturas de forma rápida y eficiente, administre clientes, suplidores y servicios. Gestione Cuentas por Cobrar y Pagar, controle los NCF y prepárese para la facturación electrónica con la DGII.",
  "imageUrl": "/img/WhatsApp Image 2025-07-31 at 10.16.30 PM.jpeg",
  "downloadUrl": "/DOC/Licitacion Interactive (1).pdf",
  "features": [
    "Generación rápida y eficiente de facturas.",
    "Control de clientes, suplidores y catálogo de servicios.",
    "Conversión de solicitudes a facturas.",
    "Gestión de Cuentas por Cobrar (CxC) y Cuentas por Pagar (CxP).",
    "Reportes de antigüedad de saldos por cobrar y por pagar.",
    "Control de consecutivos de Números de Comprobante Fiscal (NCF).",
    "Reportes para seguimiento del estado de las solicitudes.",
    "Próximamente: Interfaz con la DGII para facturación electrónica."
  ]
}
];

interface ProjectModalProps {
    project: ProjectType | null;
    onClose: () => void;
}

// Componente del Modal
const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Move useEffect here, before the conditional return
  useEffect(() => {
    const handleEsc = (event: { keyCode: number; }) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null; // Now the useEffect is always called

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose} // Cierra el modal al hacer clic en el fondo
    >
      <div 
        className="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-95 hover:scale-100"
        onClick={e => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
      >
        <div className="relative">
          <Image
  src={project.imageUrl}
  alt={`Imagen de ${project.title}`}
  width={500} // Ancho de la imagen en píxeles
  height={300} // Alto de la imagen en píxeles
  className="w-full h-auto object-cover rounded-t-2xl" // Ajusta las clases para responsividad
/>
            <button onClick={onClose} className="absolute top-4 right-4 bg-white/50 dark:bg-black/50 rounded-full p-2 text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{project.title}</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">{project.description}</p>
          
          <h3 className="mt-6 text-xl font-semibold text-zinc-800 dark:text-zinc-200">Características Principales</h3>
          <ul className="mt-4 space-y-2 list-disc list-inside text-zinc-600 dark:text-zinc-400">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <a 
              href={project.downloadUrl} 
              download
              className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800"
            >
              Descargar Documento
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Features() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before manipulating DOM
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenModal = (project: ProjectType) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };
  
  // Only manipulate body overflow after component is mounted
  useEffect(() => {
    if (!isMounted) return;
    
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isMounted]);


  return (
    <>
      <section id="about" className="bg-zinc-50 py-16 md:py-32 dark:bg-zinc-900">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-semibold lg:text-5xl text-zinc-900 dark:text-zinc-50">
              Conoce Nuestros Productos
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Hemos desarrollado soluciones robustas y a la medida para optimizar
              operaciones complejas en diversos sectores industriales y financieros.
            </p>
          </div>
          
          <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 lg:max-w-5xl">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => handleOpenModal(project)}
                className="block group rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-zinc-900 cursor-pointer"
              >
                <Card className="transform transition-transform duration-300 group-hover:scale-105 shadow-lg dark:bg-zinc-800/50 border dark:border-zinc-700/50 overflow-hidden rounded-xl h-full">
                  <CardHeader className="p-0">
                    <div className="flex h-48 w-full items-center justify-center overflow-hidden">
                     <Image
  src={project.imageUrl}
  alt={`Imagen del proyecto ${project.title}`}
  width={600} // Example width, adjust as needed
  height={192} // Equivalent to h-48 (48 * 4 = 192px), adjust as needed
  className="object-cover transition-transform duration-500 group-hover:scale-110"
/>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {isModalOpen && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    </>
  );
}
