import crypto from 'crypto'

export const generateIslemHash = (
  {
    CLIENT_CODE,
    GUID,
    KK_No,
    KK_SK_Ay,
    KK_SK_Yil,
    KK_CVC,
    KK_Sahibi_GSM,
    Islem_Tutar,
    Toplam_Tutar,
    Siparis_ID,
    Hata_URL,
    Basarili_URL,
  },
  secretKey,
) => {
  const hashString = `${CLIENT_CODE}${GUID}${KK_No}${KK_SK_Ay}${KK_SK_Yil}${KK_CVC}${KK_Sahibi_GSM}${Islem_Tutar}${Toplam_Tutar}${Siparis_ID}${Hata_URL}${Basarili_URL}${secretKey}`
  return crypto.createHash('sha256').update(hashString).digest('hex')
}
