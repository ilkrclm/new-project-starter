import { useState } from 'react'

{
  /* <CLIENT_CODE>10738</CLIENT_CODE>
<CLIENT_USERNAME>Test</CLIENT_USERNAME>
<CLIENT_PASSWORD>Test</CLIENT_PASSWORD>
</G>
<GUID>0c13d406-873b-403b-9c09-a5766840d98c</GUID>
<KK_Sahibi>Test Test</KK_Sahibi>
<KK_No>4155650100416111</KK_No>
<KK_SK_Ay>01</KK_SK_Ay>
<KK_SK_Yil>50</KK_SK_Yil>
<KK_CVC>715</KK_CVC>
<KK_Sahibi_GSM>5551231212</KK_Sahibi_GSM>
<Hata_URL>https://dev.param.com.tr/en</Hata_URL>
<Basarili_URL>https://dev.param.com.tr/tr</Basarili_URL>
<Siparis_ID>TTP_WMD_UCD3D0001</Siparis_ID>
<Siparis_Aciklama>a</Siparis_Aciklama>
<Taksit>1</Taksit>
<Islem_Tutar>100,00</Islem_Tutar>
<Toplam_Tutar>100,00</Toplam_Tutar>
<Islem_Hash>x+fo3Z+ElGSPuctK1M4BE4LVYrM=</Islem_Hash>
<Islem_Guvenlik_Tip>3D</Islem_Guvenlik_Tip>
<Islem_ID></Islem_ID>
<IPAdr>127.0.0.1</IPAdr> */
}

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    CLIENT_CODE: '10738',
    CLIENT_USERNAME: 'Test',
    CLIENT_PASSWORD: 'Test',
    GUID: '0c13d406-873b-403b-9c09-a5766840d98c',
    KK_Sahibi: 'Test Test',
    KK_No: '4155650100416111',
    KK_SK_Ay: '01',
    KK_SK_Yil: '50',
    KK_CVC: '715',
    KK_Sahibi_GSM: '5551231212',
    Hata_URL: process.env.NEXT_PUBLIC_URL + '/error',
    Basarili_URL: process.env.NEXT_PUBLIC_URL + '/success',
    Siparis_ID: 'TTP_WMD_UCD3D0001',
    Taksit: '1',
    Islem_Tutar: '100,00',
    Toplam_Tutar: '100,00',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const result = await response.json()
    console.log(result)
  }

  return (
    <form onSubmit={handleSubmit} className='grid grid-cols-3 gap-4'>
      <input
        className='text-black'
        type='text'
        name='KK_Sahibi'
        placeholder='Card Holder Name'
        onChange={handleChange}
        required
        defaultValue={formData.KK_Sahibi}
      />
      <input
        className='text-black'
        type='text'
        name='KK_No'
        placeholder='Card Number'
        onChange={handleChange}
        defaultValue={formData.KK_No}
        required
      />
      <input
        className='text-black'
        type='text'
        name='KK_SK_Ay'
        placeholder='Expiry Month'
        onChange={handleChange}
        required
        defaultValue={formData.KK_SK_Ay}
      />
      <input
        className='text-black'
        type='text'
        name='KK_SK_Yil'
        placeholder='Expiry Year'
        onChange={handleChange}
        required
        defaultValue={formData.KK_SK_Yil}
      />
      <input
        className='text-black'
        type='text'
        name='KK_CVC'
        placeholder='CVC'
        onChange={handleChange}
        required
        defaultValue={formData.KK_CVC}
      />
      <input
        className='text-black'
        type='text'
        name='KK_Sahibi_GSM'
        placeholder='Card Holder GSM'
        onChange={handleChange}
        required
        defaultValue={formData.KK_Sahibi_GSM}
      />
      <input
        className='text-black'
        type='text'
        name='Siparis_ID'
        placeholder='Order ID'
        onChange={handleChange}
        required
        defaultValue={formData.Siparis_ID}
      />
      <input
        className='text-black'
        type='text'
        name='Islem_Tutar'
        placeholder='Transaction Amount'
        onChange={handleChange}
        required
        defaultValue={formData.Islem_Tutar}
      />
      <input
        className='text-black'
        type='text'
        name='Toplam_Tutar'
        placeholder='Total Amount'
        onChange={handleChange}
        required
        defaultValue={formData.Toplam_Tutar}
      />
      <button type='submit'>Process Payment</button>
    </form>
  )
}

export default PaymentForm
