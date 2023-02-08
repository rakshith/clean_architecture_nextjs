import tw from "twin.macro";

export const Card = tw.div`
cursor-pointer
max-w-sm 
rounded 
overflow-hidden 
shadow-lg
`;

export const CardBody = tw.div`
px-6 
py-4
`;

export const CardTitle = tw.div`
font-bold text-xl mb-2
`;

export const CardDescription = tw.div`
text-gray-700 text-base
`;

export const CardFooter = tw.div`
px-6 pt-4 pb-2
`;
