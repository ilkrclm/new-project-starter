import axios from 'axios'
import { parseStringPromise } from 'xml2js'
import { generateIslemHash } from '../../utils/hashGenerator'

const SECRET_KEY = 'your_secret_key'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      CLIENT_CODE,
      CLIENT_USERNAME,
      CLIENT_PASSWORD,
      GUID,
      KK_Sahibi,
      KK_No,
      KK_SK_Ay,
      KK_SK_Yil,
      KK_CVC,
      KK_Sahibi_GSM,
      Hata_URL,
      Basarili_URL,
      Siparis_ID,
      Taksit,
      Islem_Tutar,
      Toplam_Tutar,
      Islem_Guvenlik_Tip,
      IPAdr,
      Data1,
      Data2,
      Data3,
    } = req.body

    const Islem_Hash = generateIslemHash(
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
      SECRET_KEY,
    )

    const xmlReq = `
      <?xml version="1.0" encoding="utf-8"?> <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Body>
        <TP_WMD_UCD xmlns="https://turkpos.com.tr/">
        <G>
        <CLIENT_CODE>${CLIENT_CODE}</CLIENT_CODE>
        <CLIENT_USERNAME>${CLIENT_USERNAME}</CLIENT_USERNAME>
        <CLIENT_PASSWORD>${CLIENT_PASSWORD}</CLIENT_PASSWORD>
        </G>
        <GUID>${GUID}</GUID>
        <KK_Sahibi>${KK_Sahibi}</KK_Sahibi>
        <KK_No>${KK_No}</KK_No>
        <KK_SK_Ay>${KK_SK_Ay}</KK_SK_Ay>
        <KK_SK_Yil>${KK_SK_Yil}</KK_SK_Yil>
        <KK_CVC>${KK_CVC}</KK_CVC>
        <KK_Sahibi_GSM>${KK_Sahibi_GSM}</KK_Sahibi_GSM>
        <Hata_URL>https://dev.param.com.tr/en</Hata_URL>
        <Basarili_URL>https://dev.param.com.tr/tr</Basarili_URL>
        <Siparis_ID>${Siparis_ID}</Siparis_ID>
        <Siparis_Aciklama>a</Siparis_Aciklama>
        <Taksit>${Taksit}</Taksit>
        <Islem_Tutar>${Islem_Tutar}</Islem_Tutar>
        <Toplam_Tutar>${Toplam_Tutar}</Toplam_Tutar>
        <Islem_Hash>${Islem_Hash}</Islem_Hash>
        <Islem_Guvenlik_Tip>3D</Islem_Guvenlik_Tip>
        <Islem_ID></Islem_ID>
        <IPAdr>127.0.0.1</IPAdr>
        <Ref_URL></Ref_URL>
        <Data1></Data1>
        <Data2></Data2>
        <Data3></Data3>
        <Data4></Data4>
        <Data5></Data5>
        </TP_WMD_UCD>
        </soap:Body>
        </soap:Envelope>
    `

    console.log(xmlReq)

    try {
      const response = await axios.post(
        'https://test-dmz.param.com.tr/turkpos.ws/service_turkpos_test.asmx',
        xmlReq.trim(),
        {
          headers: { 'Content-Type': 'text/xml' },
        },
      )

      const result = await parseStringPromise(response.data)
      console.log(result)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
