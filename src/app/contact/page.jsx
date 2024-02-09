'use client'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Contact() {
  const form = useRef()
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_zlanr09',
        'template_nupgdxh',
        form.current,
        'jwLUixlerwVK9ReDL',
      )
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error.text)
        },
      )

    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')
    router.push('/thank-you')
  }
  return (
    <SimpleLayout>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-6xl dark:text-zinc-300">
          Get in touch!
        </h2>
        <p className="mt-2 text-lg leading-8 sm:text-xl dark:text-zinc-300">
          I’d love to hear from you. Whether you have a question about a
          project, want to collaborate, or just want to say hi, my inbox is
          always open. Feel free to reach out and I’ll get back to you as soon
          as I can!
        </p>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 dark:text-zinc-400"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="user_name"
                id="first-name"
                autoComplete="given-name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-zinc-700"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 dark:text-zinc-400"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="user_last_name"
                id="last-name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-zinc-700"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 dark:text-zinc-400"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="user_email"
                id="email"
                autoComplete="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-zinc-700"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 dark:text-zinc-400"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                required
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-zinc-700"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button
            type="submit"
            className="block w-full rounded-md bg-teal-500 px-3.5
            py-2.5 text-center text-sm font-semibold text-white shadow-sm
            hover:bg-teal-400 focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-teal-500"
          >
            Let&apos;s talk
          </Button>
        </div>
      </form>
    </SimpleLayout>
  )
}
