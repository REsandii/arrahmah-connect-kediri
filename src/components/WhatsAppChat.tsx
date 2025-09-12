import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </Button>
        )}

        {/* Chat Popup */}
        {isOpen && (
          <Card className="w-80 shadow-xl border-0 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">SMK Arrahmah</h4>
                  <p className="text-xs text-green-100">Admin Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                <p className="text-sm text-gray-700 mb-2">
                  👋 Halo! Selamat datang di SMK Arrahmah Papar Kediri
                </p>
                <p className="text-sm text-gray-600">
                  Ada yang bisa kami bantu? Silakan klik tombol di bawah untuk chat langsung dengan admin kami!
                </p>
              </div>
              
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium"
                asChild
              >
                <a 
                  href="https://wa.me/6285890009991"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  💬 Chat Sekarang
                </a>
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                Klik untuk membuka WhatsApp
              </p>
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default WhatsAppChat;