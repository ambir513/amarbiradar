import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Undo2 } from "lucide-react";

const NotFound = () => {
  return (
    <div className="my-20 flex w-full items-center justify-center sm:mx-auto">
      <Card className="w-[300px] sm:w-md">
        <CardContent className="flex flex-col items-center justify-center gap-y-5">
          <Image
            src={"/image/404.webp"}
            alt="Not Found"
            width={500}
            height={500}
          />
          <p className="text-2xl font-bold">Coming soon....</p>
        </CardContent>
        <CardFooter className="">
          <Link href={"/"} className="w-full">
            <Button
              variant={"outline"}
              className="flex w-full items-center justify-center gap-x-2 py-1"
            >
              <Undo2 className="size-5" />
              <span> Go Back</span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;
