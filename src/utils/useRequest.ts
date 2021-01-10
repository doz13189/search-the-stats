import { ref } from 'vue'

export const useRequest = (fn: any): any => {
  const result = ref<object>({})
  const loading = ref<boolean>(false)
  const error = ref<boolean>(false)

  const createRequest = async (...args: (string|number)[] ): Promise<void> => {
    result.value = {}
    loading.value = true
    error.value = false

    const response = await fn(...args)

    if (response.status === 200) {
      result.value = response.data
    } else {
      error.value = true
    }

    loading.value = false
  }

  return {
    result,
    loading,
    error,
    createRequest
  }
}