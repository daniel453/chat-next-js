'use client'
import Input from "@/app/components/Input";
import Checkbox from "@/app/components/CheckBox";
import Button from "@/app/components/Button";
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface IFormLogin {
  email: string
  password: string
}
export default function Home() {
  const router = useRouter()
  const { register, handleSubmit, formState: {
    errors,
  } } = useForm<IFormLogin>()

  async function sumbit(data: IFormLogin) {
    const callback = await signIn('credentials',{
      ...data,
      redirect: false
    })

    if(callback?.error) {
      toast.error("Creedenciales invalidas")
    }
    
    if(callback?.ok) {
      toast.success('Log in')
      router.push('/chat')
    }
  }

  return (
    <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center mb-3">
            <h6 className="text-blueGray-500 text-sm font-bold">
              Iniciar sesión
            </h6>
          </div>
          <div className="btn-wrapper text-center">
            <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
              <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg" />Github</button>
            <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
              <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Google </button>

          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div className="text-blueGray-400 text-center mb-3 font-bold">
            <small>O con tus credenciales</small>
          </div>
          <form onSubmit={handleSubmit(sumbit)}>
            <div className="relative w-full mb-3">
              <Input type="email" label="Email" register={register} required="Este campo es requerido" id="email" errors={errors} />
            </div>
            <div className="relative w-full mb-3">
              <Input type="password" label="Contraseña" register={register} required="Este campo es requerido" id="password" errors={errors} />
            </div>
            <div>
              <Checkbox label="Recuerdame" />
            </div>
            <div className="text-center mt-6">
              <Button label="Iniciar sesión" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
