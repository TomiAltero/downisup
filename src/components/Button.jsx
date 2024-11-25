import { Button } from "@material-tailwind/react";
 
export function ButtonShowMore() {
  return (
    <div className="flex items-center">
        <a href="/quienessomos">
        <Button variant="gradient">
            Ver más
        </Button>
        </a>
    </div>
    );
}
    
export function ButtonHome() {
  return (
    <div className="flex items-center">
      <a href="/contactanos">
        <Button variant="gradient">
            Contáctanos
        </Button>
      </a>
    </div>
  );
}

export function ButtonContact() {
    return (
      <div className="flex items-center">
        <a href="/contactanos">
          <Button variant="gradient">
              Contáctanos
          </Button>
        </a>
      </div>
    );
  }