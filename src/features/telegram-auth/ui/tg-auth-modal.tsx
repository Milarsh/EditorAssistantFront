import { X } from 'lucide-react'
import { useEffect } from 'react'
import QRCode from 'react-qr-code'

import { useQrCreate } from '@/entities/telegram/lib'

type Props = {
  open: boolean
  onClose: () => void
}

export const TgAuthModal = ({ open, onClose }: Props) => {
  const { mutate: createQr, data } = useQrCreate()

  useEffect(() => {
    if (open) {
      createQr({ force: false })
    }
  }, [createQr, open])

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      {/* <div */}
      {/*  className="absolute inset-0 bg-black/40" */}
      {/*  onClick={onClose} */}
      {/* /> */}

      {/* modal */}
      <div
        className="relative w-[520px] overflow-hidden rounded-xl bg-white
          shadow-xl"
      >
        {/* header */}
        <div
          className="flex items-center justify-between bg-blue-600 px-6 py-4
            text-white"
        >
          <h2 className="text-lg font-semibold">Привязка Telegram-аккаунта</h2>

          <button type="button" onClick={onClose} className="hover:opacity-80">
            <X size={22} />
          </button>
        </div>

        {/* content */}
        <div className="flex flex-col items-center p-8">
          <h3 className="mb-6 text-xl font-semibold">
            1. Сканирование QR-кода
          </h3>

          {/* инструкция */}
          <div className="mb-8 w-full rounded-xl bg-gray-100 p-5 text-gray-600">
            <ul className="list-disc space-y-1 pl-5">
              <li>Откройте Telegram на своем устройстве</li>
              <li>Отсканируйте QR-код ниже или нажмите на ссылку</li>
              <li>После сканирования вернитесь на эту страницу</li>
            </ul>
          </div>
          {data?.data.qr_url && (
            <QRCode value={data?.data.qr_url} className="size-56" />
          )}
        </div>
      </div>
    </div>
  )
}
