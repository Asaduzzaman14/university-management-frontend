import { setToLocalStorage } from "@/utils/local_storage";

export const storeInfo = ({ accessToken }: { accessToken: string }) => {
  console.log(accessToken);

  setToLocalStorage("accessToken", accessToken as string);
};
