// import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export default function DialogService(props: { info: string }) {
  const descricoes: Record<string, string> = {
    "Aparelhos Invisiveis": "Aparelhos invisíveis para seu conforto.",
    "Clareamento Dental": "Tratamentos modernos para um sorriso mais branco.",
    "Implantes Dentários":
      "Soluções permanentes para a substituição de dentes.",
  };

  const descricao = descricoes[props.info] || "Mais informações em breve.";

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Veja Mais</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>{props.info}</DialogTitle>
          </DialogHeader>

          <DialogDescription>{descricao}</DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
