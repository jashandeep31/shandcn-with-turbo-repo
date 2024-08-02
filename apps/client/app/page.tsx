import { Button, buttonVariants } from "@repo/ui/button";
import { cn } from "@repo/ui/global.css";
import React from "react";

const page = () => {
  return (
    <div>
      page
      <Button className={cn(buttonVariants())}>Hello</Button>
    </div>
  );
};

export default page;
