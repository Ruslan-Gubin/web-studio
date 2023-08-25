import { z } from "zod";
import { META_TAGS } from "../constants";
import { API_ENDPOINT } from "../constants/base-api-urls";

const envVariables = z.object({
  API_ENDPOINT: z.string().url(),
  BASE_WS_URL: z.string().url(),
});

declare global {
  interface ImportMetaEnv extends z.infer<typeof envVariables> {}
}

export const CONFIG_APP = {
  API_ENDPOINT,
  META_TAGS,
} as const;
