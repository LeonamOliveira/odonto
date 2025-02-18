import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CardDepoimentos(props: {
  nome: string;
  depoimento: string;
}) {
  return (
    <>
      <Card className="w-[350px] transition-all hover:-mt-2 hover:mb-2 scale-90 p-2">
        <CardContent>
          <CardDescription>
            <div className="flex flex-col space-y-1.5">
              <Label>{props.depoimento}</Label>
            </div>
          </CardDescription>
        </CardContent>
        <CardHeader>
          <CardTitle>{props.nome}</CardTitle>
        </CardHeader>
        <CardFooter>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardFooter>
      </Card>
    </>
  );
}
