export interface ReactWebengageWebpushInterface {
  setDisablePrompt: (value: boolean) => void
  setRegisterServiceWorker: (value: boolean) => void
  promp: VoidFunction
  subscribe: (callback: VoidFunction) => void
  isSubscribed: () => boolean
  isPushNotificationsSupported: (callback: (supported: boolean) => void) => void
  onSubscribe: (callback: VoidFunction) => void
  onWindowViewed: (callback: VoidFunction) => void
  onWindowAllowed: (callback: VoidFunction) => void
  onWindowDenied: (callback: VoidFunction) => void
  onPushRegistered: (callback: VoidFunction) => void
  onPushUnregistered: (callback: VoidFunction) => void
}

class ReactWebengageWebpush implements ReactWebengageWebpushInterface {
  setRegisterServiceWorker(status: boolean) {
    window.webengage.options('webpush.registerServiceWorker', status)
  }

  setDisablePrompt(status: boolean) {
    window.webengage.options('webpush.disablePrompt', status)
  }

  promp() {
    window.webengage.onReady(function () {
      window.webengage.webpush.prompt()
    })
  }

  subscribe(callback: VoidFunction) {
    window.webengage.onReady(function () {
      window.webengage.webpush.subscribe(function () {
        callback()
      })
    })
  }

  isSubscribed() {
    return window.webengage.webpush.isSubscribed()
  }

  isPushNotificationsSupported(callback: (supported: boolean) => void) {
    return window.webengage.webpush.isPushNotificationsSupported(callback)
  }

  onSubscribe(callback: VoidFunction) {
    return window.webengage.webpush.onSubscribe(callback)
  }

  onWindowViewed(callback: VoidFunction) {
    window.webengage.options('webpush.onWindowViewed', callback)
  }

  onWindowAllowed(callback: VoidFunction) {
    window.webengage.options('webpush.onWindowAllowed', callback)
  }

  onWindowDenied(callback: VoidFunction) {
    window.webengage.options('webpush.onWindowDenied', callback)
  }

  onPushRegistered(callback: VoidFunction) {
    window.webengage.options('webpush.onPushRegistered', callback)
  }

  onPushUnregistered(callback: VoidFunction) {
    window.webengage.options('webpush.onPushUnregistered', callback)
  }
}

export default ReactWebengageWebpush
