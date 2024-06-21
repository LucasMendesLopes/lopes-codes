'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from './components/input'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

import './styles.css'
import { useState } from 'react'
import { CircleNotch } from '@phosphor-icons/react'

const emailRegex = /^(?!.*\.\.)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const contactFormSchema = z.object({
  name: z
    .string({ message: 'Digite seu nome' })
    .trim()
    .min(1, { message: 'Digite seu nome' }),
  email: z
    .string({ message: 'Digite seu e-mail' })
    .trim()
    .min(1, { message: 'Digite seu e-mail' })
    .email({ message: 'E-mail inválido!' })
    .regex(emailRegex),
  message: z.string().trim().min(1, { message: 'Digite uma mensagem' }),
})

type contactFormData = z.infer<typeof contactFormSchema>

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = (data: contactFormData) => {
    setIsLoading(true)

    const { name, email, message } = data

    const templateParams = {
      name,
      email,
      message,
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      )
      .then(() => {
        toast.success('Mensagem enviada com sucesso!')
      })
      .catch(() => {
        toast.error('Erro ao enviar a mensagem, tente novamente mais tarde.')
      })
      .finally(() => {
        reset()
        setIsLoading(false)
      })
  }

  return (
    <section
      className="section-container bg-zinc-800 2xl:h-screen 2xl:p-0"
      id="contact"
    >
      <Toaster position="bottom-right" />

      <div className="centralized-container">
        <div className="flex h-full w-full flex-col gap-10">
          <motion.h2
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 150 }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 0.2 }}
          >
            Contato
          </motion.h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <Input
                name="name"
                placeholder="nome"
                control={control}
                errorMessage={errors.name?.message}
              />

              <Input
                name="email"
                placeholder="e-mail"
                control={control}
                errorMessage={errors.email?.message}
              />

              <div className="flex flex-col gap-2">
                <textarea
                  id="message"
                  className="text-gray-900 text-md min-h-56 w-full rounded-lg p-3 outline-none"
                  placeholder="mensagem"
                  {...register('message')}
                />

                {errors.message && (
                  <span className="text-red-600">{errors.message.message}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className={`button ${isLoading && 'lg:border-primary-blue lg:bg-transparent'}`}
            >
              {isLoading ? (
                <CircleNotch
                  className="animate-spin text-white lg:text-primary-blue"
                  size={30}
                />
              ) : (
                'Enviar'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
