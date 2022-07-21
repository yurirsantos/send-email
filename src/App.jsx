import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

export function App() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_z5hwpi2', //ID Service
        'template_18nxrhn', //ID Template
        form.current,
        '0jh92L19mCNamvZpQ' //Key Public
      )
      .then(
        result => {
          Swal.fire(
            'E-mail Enviado!',
            'Seu e-mail foi enviado com sucesso para Fronteira Tec',
            'success'
          )

          const input_user_name = (document.getElementById('user_name').value =
            '')
          const input_user_email = (document.getElementById(
            'user_email'
          ).value = '')
          const input_message = (document.getElementById('message').value = '')
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'E-mail não enviado, entre em contato com nossa central de atendimento atráves do telefone (49) 98880-1287'
          })
        }
      )
  }

  return (
    <div>
      <div className="w-2/3 m-auto mt-5 mb-5 bg-gray-200 p-5 rounded-md">
        <form ref={form} onSubmit={sendEmail}>
          <div className="col-span-6 sm:col-span-3 m-5">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="col-span-6 sm:col-span-4 m-5">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="m-5">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                id="message"
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="w-40 m-auto">
            <input
              className="bg-amber-400 p-5 rounded-md  text-center font-bold hover:bg-amber-600 cursor-pointer"
              type="submit"
              value="Enviar"
              id="buttonEnviar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
