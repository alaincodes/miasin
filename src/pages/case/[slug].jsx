import { useRouter } from 'next/router'

export default function Cases() {
  const router = useRouter()

  return <div>Cases {router.query.slug}</div>
}