import DialogService from "./servicos_dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardServices(props: { titulo: string }) {
  
  return (
    <>
      <Card className="w-[350px] transition-all hover:-mt-2 hover:mb-2">
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
      </Card>
    </>
  );
}
