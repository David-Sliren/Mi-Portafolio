import React from "react";

const Form = ({ handler }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = new FormData(e.target);
    const data = Object.fromEntries(value.entries());

    const DATA_ENTRY = {
      user_id: import.meta.env.VITE_EMAIL_USER_ID,
      service_id: import.meta.env.VITE_EMAIL_SERVICES_ID,
      template_id: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      template_params: {
        name: data.client_name,
        email: data.email,
        message: data.order,
      },
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(DATA_ENTRY),
    });

    try {
      if (res.ok) {
        e.target.reset();
        handler();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="space-y-8 animate-fade-in-up" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-[#c1c6d6] ml-1 font-inter">
            Nombre
          </label>
          <input
            className="w-full bg-[#1b1c1e] border border-[#414753]/20 focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] rounded-xl p-4 text-[#e3e2e4] placeholder:text-[#c1c6d6]/30 transition-all outline-none "
            placeholder="John Doe"
            type="text"
            name="client_name"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-[#c1c6d6] ml-1 font-inter">
            Correo
          </label>
          <input
            className="w-full bg-[#1b1c1e] border border-[#414753]/20 focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] rounded-xl p-4 text-[#e3e2e4] placeholder:text-[#c1c6d6]/30 transition-all outline-none"
            placeholder="john@example.com"
            type="email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-[#c1c6d6] ml-1 font-inter">
          Mensaje
        </label>
        <textarea
          className="w-full bg-[#1b1c1e] border border-[#414753]/20 focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] rounded-xl p-4 text-[#e3e2e4] placeholder:text-[#c1c6d6]/30 transition-all resize-none outline-none "
          placeholder="Hablame sobre tu projecto.."
          rows="5"
          name="order"
          required
        ></textarea>
      </div>
      <button
        className="w-full bg-gradient-blue py-5 rounded-xl font-headline font-extrabold text-lg text-white transition-all active:scale-95 shadow-lg shadow-[#0071E3]/20 cursor-pointer hover:animate-jelly"
        type="submit"
      >
        Enviar Correo
      </button>
    </form>
  );
};

export default Form;
