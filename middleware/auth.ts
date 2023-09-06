import { useAuthStore } from '~/store/auth'

export default function ({ redirect }: any) {
  const authStore = useAuthStore()

  if (!authStore.isAuthenticated) {
    return redirect('/index')
  }
}