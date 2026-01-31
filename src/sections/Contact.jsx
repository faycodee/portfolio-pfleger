// src/sections/Contact.jsx
import emailjs from '@emailjs/browser';
import { useState } from 'react';

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';

import { useTranslation } from '../contexts/translationContext';
import { SITE_DATA } from '../configs/data/site';

const Contact = () => {

  const { t, lang } = useTranslation();
  const [ isSending, setIsSending ] = useState(false);
  const [ status, setStatus ] = useState({ type: '', message: '', fading: false });

  // Validación básica de email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Mapeo de idioma a template ID
  const getTemplateId = () => {
    return lang === 'es'
      ? import.meta.env.VITE_EMAILJS_TEMPLATE_ES_ID
      : import.meta.env.VITE_EMAILJS_TEMPLATE_EN_ID;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const emailValue = form.user_email.value;

    // Validar email
    if (!validateEmail(emailValue)) {
      setStatus({
        type: 'error',
        message: t.contact.form.invalidEmail || 'Please enter a valid email address.'
      });
      setTimeout(() => {
        setStatus(prev => ({ ...prev, fading: true }));
        setTimeout(() => {
          setStatus({ type: '', message: '', fading: false });
        }, 500);
      }, 5000);
      return;
    }

    setIsSending(true);
    setStatus({ type: '', message: '' });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        getTemplateId(),
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({
            type: 'success',
            message: t.contact.form.success || 'Message sent! I\'ll get back to you soon.'
          });

          setTimeout(() => {
            setStatus(prev => ({ ...prev, fading: true })); // Activa animación
            setTimeout(() => {
              setStatus({ type: '', message: '', fading: false }); // Limpia después de la animación
            }, 500); // Duración de la animación (debe coincidir con la de Tailwind)
          }, 5000); // Tiempo que se muestra el mensaje (5 segundos)

          form.reset();
        },
        (error) => {

          console.error('Error al enviar:', error);
          setStatus({
            type: 'error',
            message: t.contact.form.error || 'There was an error. Please try again later.'
          });
          setTimeout(() => {
            setStatus(prev => ({ ...prev, fading: true }));
            setTimeout(() => {
              setStatus({ type: '', message: '', fading: false });
            }, 500);
          }, 5000);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className=" flex py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl text-center">
        {/* Mensaje principal */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          {t.contact.message}
        </h2>

        {/* Mensaje de estado (éxito/error) */}
        {status.message && (
          <div
            className={`
              mb-6 p-4 rounded-lg relative
              transition-all duration-500 ease-in-out
              ${status.fading ? 'opacity-0 translate-y-[-10px]' : 'opacity-100 translate-y-0'}
              ${
          status.type === 'success'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }
            `}
            role="alert"
          >
            {status.message}
          </div>
        )}
        {/* Formulario de contacto */}
        <form
          onSubmit={sendEmail}
          className="mt-8 space-y-4"
        >
          <input
            name="user_name"
            type="text"
            placeholder={ t.contact.form.name }
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition"
          />
          <input
            name="user_email"
            type="email"
            placeholder={ t.contact.form.email }
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition"
          />
          <textarea
            rows="5"
            name="message"
            placeholder={t.contact.form.message}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg transition-colors duration-300"
          >
            {isSending ? t.contact.form.sending || 'Sending...' : t.contact.form.buttonText}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
