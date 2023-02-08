import { Card } from "@/application/components/AppCard/Card.styles";
import React from "react";

interface AppCardType {
  children: string | JSX.Element | JSX.Element[];
}

function AppCard({ children }: AppCardType) {
  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg">
      {children}
    </Card>
  );
}

export default AppCard;
