"use server";
import { Metadata } from "next";

type Props = {
  title?: string;
  description?: string;
};

const SEO: React.FC<Props> = ({
  title: propTitle,
  description: propDescription,
}: Props) => {
  const metadata: Metadata = {
    title: propTitle,
    description: propDescription,
  };
  return null;
};

export default SEO;
