import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            ¿Listo para construir tu próximo proyecto?
          </h2>
          <p className="mt-4">Hablemos sobre tus ideas. Contáctanos para una cotización personalizada.</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
             <Button asChild size="lg">
              <Link href="https://wa.me/18296706488" target="_blank" rel="noopener noreferrer">
                <span>Contáctanos</span>
              </Link>
            </Button>

             <Button size="lg" variant="outline" disabled>
                <span>Solicita una Cotización</span>
            </Button>
          </div>
          <p className="mt-4">
  Correo: <a href="mailto:global@giscrd.com" className="text-blue-500 underline">global@giscrd.com</a>
</p>
        </div>
      </div>
    </section>
  );
}
