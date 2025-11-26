"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "+330756898950";
  const message = "Bonjour, je suis intéressé(e) par vos services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        asChild
        className="bg-green-600 hover:bg-green-700 text-white shadow-lg flex items-center gap-3 px-4 py-3 rounded-full"
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Nous contacter sur Whatsapp">
          <MessageCircle className="h-6 w-6" />
          <span className="text-sm font-medium">Nous contacter sur Whatsapp</span>
        </a>
      </Button>
    </div>
  );
}