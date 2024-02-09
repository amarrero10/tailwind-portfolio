'use client'
import { SimpleLayout } from '@/components/SimpleLayout'
import { useRouter } from 'next/navigation'

export default function ThankYou() {
  const router = useRouter()
  return (
    <>
      <SimpleLayout
        title="Message Received!"
        intro="Thanks for contacting me! I’ll get back to you as soon as I can! "
      />
      <div className=" mx-auto w-full">
        <button
          onClick={() => router.push('/')}
          className="mx-auto mt-10 block w-4/5 rounded-md bg-teal-500
            px-3.5 py-2.5 text-center text-sm font-semibold text-white
            shadow-sm hover:bg-teal-400 focus-visible:outline
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 sm:w-[10%]"
        >
          Back Home
        </button>
      </div>
    </>
  )
}
