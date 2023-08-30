import { authConfig } from "@/shared";
import { getServerSession } from "next-auth/next";
import Image from "next/image";

import styles from "../styles/pages/Profile.module.scss";

export default async function Profile () {
const session = await getServerSession(authConfig);

  return (
    <div className={styles.root}>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image &&
      <Image 
      src={session?.user?.image} 
      width={200} 
      height={200}
      alt='User image'
      priority
      />
      }
    </div>
  );
};
