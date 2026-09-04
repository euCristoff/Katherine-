import { useState, type FormEvent } from 'react';
import { X, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { SERVICES_DATA, WHATSAPP_BASE_URL } from '../data/dentistData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookingModal({ isOpen, onClose, defaultService = '' }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(defaultService || 'Aparelho Autoligado');
  const [name, setName] = useState('');
  const [period, setPeriod] = useState('Manhã');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá, Dra. Katherine Cavalcante! Meu nome é ${name || 'Paciente'}. Gostaria de agendar uma consulta para: ${selectedService}.${
      period ? ` Prefiro no período da ${period}.` : ''
    }${notes ? ` Observações: ${notes}` : ''}`;

    const url = `https://api.whatsapp.com/send?phone=5582988191366&text=${encodeURIComponent(message)}&utm_source=website&utm_medium=booking_modal`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#dec7a8] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 text-[#887868] hover:text-[#2a241f] p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a4794e] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Agendamento Rápido
          </div>
          <h3
            className="text-xl sm:text-2xl font-bold text-[#2a241f] font-serif-title"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Agende sua Consulta
          </h3>
          <p className="text-xs sm:text-sm text-[#6b5f54]">
            Preencha seus dados para iniciar o contato direto no WhatsApp com a Dra. Katherine.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#4a4036] mb-1.5">
              Seu Nome Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Maria Silva"
              className="w-full px-4 py-2.5 rounded-xl border border-[#dccbb7] text-sm text-[#2a241f] focus:outline-none focus:ring-2 focus:ring-[#a4794e]/40 focus:border-[#a4794e]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4a4036] mb-1.5">
              Procedimento de Interesse
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#dccbb7] text-sm text-[#2a241f] focus:outline-none focus:ring-2 focus:ring-[#a4794e]/40 focus:border-[#a4794e] bg-white"
            >
              {SERVICES_DATA.map((s) => (
                <option key={s.id} value={s.shortTitle}>
                  {s.shortTitle}
                </option>
              ))}
              <option value="Avaliação Geral & Check-up">Avaliação Geral & Check-up</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4a4036] mb-1.5">
              Período de Preferência
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Manhã', 'Tarde'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  className={`py-2 px-4 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    period === p
                      ? 'bg-[#a4794e] text-white border-[#a4794e]'
                      : 'bg-white text-[#5a4e44] border-[#dccbb7] hover:bg-[#faf7f2]'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4a4036] mb-1.5">
              Dúvidas ou Observações (Opcional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Gostaria de saber valores e tempo médio de tratamento."
              className="w-full px-4 py-2 rounded-xl border border-[#dccbb7] text-sm text-[#2a241f] focus:outline-none focus:ring-2 focus:ring-[#a4794e]/40 focus:border-[#a4794e]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-[#a4794e] hover:bg-[#8f643b] active:scale-[0.98] transition-all shadow-md shadow-[#a4794e]/25 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Continuar no WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
