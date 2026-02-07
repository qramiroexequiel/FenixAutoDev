import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software de Stock y Logística para PyMEs | Fénix AutoDev",
  description:
    "Sistemas de gestión de inventario, pedidos y logística para corralones, distribuidoras y proveedores.",
  keywords: [
    "Software para PyMEs",
    "Control de stock",
    "Gestión logística",
    "Depósitos",
    "Corralones",
    "Distribuidoras",
    "La Plata",
    "Argentina",
  ],
};

export default function PymesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
