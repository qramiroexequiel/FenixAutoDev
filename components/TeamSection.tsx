"use client";

import { motion } from "framer-motion";
import { Card, CardHeader } from "@/components/ui/card";

const MEMBERS = [
  {
    name: "Ramiro Quevedo",
    role: "CTO & Lead Developer",
    bio: "Especialista en Automatización e Inteligencia Artificial.",
    initials: "RQ",
  },
  {
    name: "José",
    role: "Consultor Especialista en Salud",
    bio: "Gestión médica y optimización de consultorios.",
    initials: "J",
  },
  {
    name: "Hernán",
    role: "Operaciones & Logística",
    bio: "Experto en procesos industriales y gestión municipal.",
    initials: "H",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-[#020817] border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expertos en Tecnología, Salud y Operaciones.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No solo escribimos código. Entendemos tu negocio porque venimos de ahí.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-card/80 border-border hover:border-[#FF8C00]/30 transition-colors h-full text-center">
                <CardHeader className="space-y-4">
                  <div className="w-20 h-20 rounded-full bg-[#FF8C00]/20 border-2 border-[#FF8C00]/40 flex items-center justify-center mx-auto text-[#FF8C00] font-bold text-xl">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {member.name}
                  </h3>
                  <p className="text-[#FF8C00] text-sm font-medium">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
