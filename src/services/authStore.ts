import { authKey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local_storage";

export const storeInfo = ({ accessToken }: { accessToken: string }) => {
  console.log(accessToken);

  setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedTokenData = decodedToken(authToken);
    return decodedTokenData;
  } else {
    return "";
  }
};

export const isLoggdin = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};
