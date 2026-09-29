import { useState, type FormEvent } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import { supabase } from '@/lib/supabase';
import { User, Phone, Mail, Calendar, MessageSquare, Send, CheckCircle, AlertCircle, Sparkles, Hand, Bone } from 'lucide-react';

export function BookingForm() {
  const { t } = useI18n();
  const sectionRef = useReveal<HTMLDivElement>();

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase.from('bookings').insert({
        name,
        contact,
        service,
        preferred_date: new Date(date).toISOString(),
        notes: notes || null,
      });

      if (error) throw error;

      try {
        await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-booking-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ name, contact, service, date, notes: notes || '' }),
        });
      } catch {
        // Email notification is best-effort; booking itself succeeded
      }

      setStatus('success');
      setName('');
      setContact('');
      setService('');
      setDate('');
      setNotes('');
    } catch {
      setStatus('error');
    }
  };

  const serviceOptions = [
    { value: 'shr', label: t.booking.services.shr, icon: Sparkles },
    { value: 'massage', label: t.booking.services.massage, icon: Hand },
    { value: 'bone', label: t.booking.services.bone, icon: Bone },
  ];

  return (
    <section
      id="booking"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#fdf6f4] via-[#f9ebeb] to-[#fdf6f4]"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#f5d3cd]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#fbe9e6]/30 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="relative max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-xs font-sans tracking-[0.25em] uppercase text-[#d27b6d] mb-4">
            {t.booking.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2a2320] mb-2">
            {t.booking.title}
          </h2>
          <div className="w-16 h-px bg-[#d27b6d]/40 mx-auto mt-6" />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(210,123,109,0.08)] border border-[#f5d3cd]/30">
          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-[#fdf6f4] flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#d27b6d]" />
              </div>
              <p className="font-serif text-2xl text-[#2a2320] mb-2">{t.booking.success}</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-sans text-[#d27b6d] hover:text-[#c47e7e] transition-colors"
              >
                ←
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-sans font-medium text-[#2a2320]/80 mb-2">
                  <User className="w-4 h-4 text-[#d27b6d]" />
                  {t.booking.name}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.booking.namePlaceholder}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#fdf9f8] border border-[#f5d3cd]/40 text-[#2a2320] placeholder-[#2a2320]/30 focus:outline-none focus:border-[#d27b6d] focus:ring-2 focus:ring-[#d27b6d]/10 transition-all duration-300 text-sm font-sans"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="flex items-center gap-2 text-sm font-sans font-medium text-[#2a2320]/80 mb-2">
                  <Phone className="w-4 h-4 text-[#d27b6d]" />
                  {t.booking.contact}
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={t.booking.contactPlaceholder}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#fdf9f8] border border-[#f5d3cd]/40 text-[#2a2320] placeholder-[#2a2320]/30 focus:outline-none focus:border-[#d27b6d] focus:ring-2 focus:ring-[#d27b6d]/10 transition-all duration-300 text-sm font-sans"
                />
              </div>

              {/* Service selection */}
              <div>
                <label className="flex items-center gap-2 text-sm font-sans font-medium text-[#2a2320]/80 mb-2">
                  <Sparkles className="w-4 h-4 text-[#d27b6d]" />
                  {t.booking.service}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setService(opt.label)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-sans transition-all duration-300 ${
                        service === opt.label
                          ? 'bg-[#d27b6d] text-white border-[#d27b6d] shadow-[0_4px_14px_rgba(210,123,109,0.2)]'
                          : 'bg-[#fdf9f8] text-[#2a2320]/70 border border-[#f5d3cd]/40 hover:border-[#d27b6d] hover:text-[#d27b6d]'
                      }`}
                    >
                      <opt.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-left text-xs leading-tight">{opt.label}</span>
                    </button>
                  ))}
                </div>
                <input type="hidden" required value={service} onChange={() => {}} />
              </div>

              {/* Date */}
              <div>
                <label className="flex items-center gap-2 text-sm font-sans font-medium text-[#2a2320]/80 mb-2">
                  <Calendar className="w-4 h-4 text-[#d27b6d]" />
                  {t.booking.date}
                </label>
                <input
                  type="datetime-local"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#fdf9f8] border border-[#f5d3cd]/40 text-[#2a2320] focus:outline-none focus:border-[#d27b6d] focus:ring-2 focus:ring-[#d27b6d]/10 transition-all duration-300 text-sm font-sans"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="flex items-center gap-2 text-sm font-sans font-medium text-[#2a2320]/80 mb-2">
                  <MessageSquare className="w-4 h-4 text-[#d27b6d]" />
                  {t.booking.notes}
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.booking.notesPlaceholder}
                  rows={3}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#fdf9f8] border border-[#f5d3cd]/40 text-[#2a2320] placeholder-[#2a2320]/30 focus:outline-none focus:border-[#d27b6d] focus:ring-2 focus:ring-[#d27b6d]/10 transition-all duration-300 text-sm font-sans resize-none"
                />
              </div>

              {/* Error message */}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm font-sans text-red-600 bg-red-50 px-4 py-3 rounded-xl animate-fade-in">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {t.booking.error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-sans font-medium tracking-wide text-white bg-[#d27b6d] rounded-full hover:bg-[#c47e7e] transition-all duration-300 shadow-[0_8px_24px_rgba(210,123,109,0.25)] hover:shadow-[0_12px_32px_rgba(210,123,109,0.35)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t.booking.submitting}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.booking.submit}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
