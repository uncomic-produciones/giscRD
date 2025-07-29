import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <section id="productos" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-semibold lg:text-5xl">
          Descubre cómo podemos ayudarte
          </h1>
          
        </div>

        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
  <Link href="https://ies-systemsmx.com.mx/generacion-formulario"> 
  <Card className="group shadow-zinc-950/5">
    <CardHeader className="pb-3">
      <div className="flex justify-center items-center">
        
          <Image
            src="/img/analysis-1841158_1280.jpg"
            alt="Abstract Object"
            width={250}
            height={250}
          />
      
      </div>
      <h3 className="mt-6 font-medium">Administración de Contenido con IA</h3>
    </CardHeader>
    <CardContent>
      <p className="text-sm">
        Descubre cómo ayudamos a empresas como la tuya a crecer.
      </p>
    </CardContent>
  </Card>
</Link>
 <Link href="https://ies-systemsmx.com.mx/servicios">
  <Card className="group shadow-zinc-950/5">
    <CardHeader className="pb-3">
      <div className="flex justify-center items-center">
        <a href="YOUR_DESIRED_LINK_HERE">
          <Image
            src="/img/pexels-sora-shimazaki-5668882.jpg"
            alt="Abstract Object"
            width={250}
            height={250}
          />
        </a>
      </div>
      <h3 className="mt-6 font-medium">Sistema Integral de Gestión Jurídica</h3>
    </CardHeader>
    <CardContent>
      <p className="mt-3 text-sm">Todo lo que necesitas para gestionar tu actividad legal</p>
    </CardContent>
  </Card>
</Link>
<Link href="https://ies-systemsmx.com.mx/aseguradora-digital"> 
  <Card className="group shadow-zinc-950/5">
    <CardHeader className="pb-3">
      <div className="flex justify-center items-center">
        <a href="YOUR_DESIRED_LINK_HERE">
          <Image
            src="/img/primer-plano-de-una-pareja-irreconocible-que-firma-un-contrato-con-un-asesor-financiero.jpg"
            alt="Abstract Object"
            width={250}
            height={250}
          />
        </a>
      </div>
      <h3 className="mt-6 font-medium">Aseguradora Digital</h3>
    </CardHeader>
    <CardContent>
      <p className="mt-3 text-sm">
        Innovamos la forma de asegurar: 100% digital, 100% contigo. sin necesidad de un Gestor
      </p>
    </CardContent>
  </Card>
  </Link>
</div>
  
      </div>
    </section>
  );
}

