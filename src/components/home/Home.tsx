import { Heart } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Esquema de validação com Zods
const formSchema = z.object({
  password: z
    .string({
      required_error: "A senha é obrigatória",
      invalid_type_error: "A senha precisa ser uma palavra",
    })
    .refine((val) => val.toLowerCase() === "33anosdealegria", {
      message: "Senha incorreta!",
    }),
});

export default function Home() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const password = values.password;
    if (password.toLowerCase() === "33anosdealegria") {
      navigate("/GiftPage");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-rose-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center">
          <Heart className="mx-auto text-rose-500 mb-4" size={64} />
          <h1 className="text-2xl font-bold text-rose-600 mb-6">
            Descubra o seu Presente Secreto!
          </h1>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...form.register("password")}
                placeholder="Digite a senha secreta"
                className="w-full p-3 border-2 border-rose-300 rounded-lg text-center text-rose-500"
              />
              {form.formState.errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition"
            >
              Descobrir Presente
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
