import { CONFIG_APP } from "@/shared";
import { mockServicesList } from "@/shared/constants/mockServices";
import { ServicesList } from "@/widgets";

export const metadata = CONFIG_APP.META_TAGS.servicePage;


export default async function SevricesPage() {
  const servicesList = mockServicesList

  return (
      <ServicesList title="Услуги" servicesData={servicesList} />
  );
};

