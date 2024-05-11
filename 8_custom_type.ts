/*
    ! Custom Type:
    * Şu ana kadar hep primitive typlearıı kullandık.Projelerdeki
    * problemlerde çoğu zaman o anki yaptığımız işe özel daha spesifik
    * typleara ihtiyaç duyarız.Bunları yazmak için `type` anahtar kelimesine
    * ihtiyaç duyarız.
 *Tuple
 *Object
 *Enum
 *Function
 */
//? 1.Object Type
type ErrorResponseType = {
  status: string;
  errorMessage: string;
};
const response: ErrorResponseType = {
  status: "404",
  errorMessage: "404 not found",
};
