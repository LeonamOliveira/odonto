import { Label } from "@/components/ui/label";
import DialogService from "./servicos_dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardServices(props: { titulo: string , img?: string}) {
  
  return (
    <>
     <Card className="w-[350px] h-[250px] relative overflow-hidden transition-all hover:-mt-2 hover:mb-2 rounded-lg">
      {/* Background Image */}
      {props.img && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('/assets/${props.img}')` }}
        />
      )}

      {/* Overlay escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Conteúdo do Card */}
      <div className="relative z-10 p-4 text-white">
        <CardHeader>
          <CardTitle>{props.titulo}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <div className="flex flex-col space-y-1.5">
              <DialogService info={props.titulo} />
            </div>
          </CardDescription>
        </CardContent>
      </div>
    </Card>
    </>
  );
}
