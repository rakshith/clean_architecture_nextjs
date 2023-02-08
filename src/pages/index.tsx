import AppCard from "@/application/components/AppCard/AppCard";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/application/components/AppCard/Card.styles";
import { navigateToPage } from "@/shared/navigation/app_router";
import { Container } from "@/styles/Container.styles";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Container>
        <Card onClick={() => navigateToPage("detail", router)}>
          <img
            className="w-full"
            src="https://paulryan.com.au/wp-content/uploads/2015/01/19abc0ee-87b1-49d2-9085-d32ba232331dbkimage-FCE5F1DF.jpg"
            alt="Sunset in the mountains"
          />
          <CardBody>
            <CardTitle className="font-bold text-xl mb-2">
              The Coldest Sunset
            </CardTitle>
            <CardDescription className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </CardDescription>
          </CardBody>

          <CardFooter>Card Footer</CardFooter>
        </Card>
      </Container>
    </>
  );
}
