import { ref } from 'vue'

export class UseRequest {
  private _result = ref<any>({})
  private _loading = ref<boolean>(false)
  private _error = ref<boolean>(false)
  private _fn

  constructor(fn: Function) {
    this._fn = fn
  }

  async createRequest<T>(args: T): Promise<void> {
    this._result.value = {}
    this._loading.value = true
    this._error.value = false

    const response = await this._fn(args)

    if (response.status === 200) {
      this._result.value = response.data
    } else {
      this._error.value = true
    }

    this._loading.value = false
  }

  get result() {
    return this._result
  }

  get loading() {
    return this._loading
  }

  get error() {
    return this._error
  }

}