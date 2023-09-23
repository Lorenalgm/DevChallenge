import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");

  async function handleSubscribe(e: any) {
    e.preventDefault();

    // try {
    //   const response = await addEmailIntoNewsletter(email);
    //   if (response) {
    //     alert("Feito! Você será o primeiro a saber sobre novos desafios :)");
    //     setEmail("");
    //   }
    // } catch (err) {
    //   alert("Opa, algo deu errado! Pode tentar novamente? :c");
    // }
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
      <Player
        autoplay={true}
        controls={false}
        loop={true}
        src="https://assets5.lottiefiles.com/private_files/lf30_WdTEui.json"
        style={{ height: "300px", width: "300px" }}
      />
      <div className="flex flex-col gap-4 md:gap-2 p-4 md:p-0 text-center md:text-left">
        <p className="text-2xl font-bold">
          Seja notificado sobre novos desafios!
        </p>
        <p className="text-yellow-400">
          Inscreva-se para ser o primeiro a saber sobre novos desafios 😀
        </p>
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Digite seu melhor email..."
        />
        <Button
          onClick={handleSubscribe}
          type="button"
          className="bg-purple-800 text-white hover:bg-purple-500 rounded-full"
        >
          Inscrever
        </Button>
      </div>
    </div>
  );
}
