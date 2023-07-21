export interface ReactWebengageNotificationInterface {
  render: (value?: any) => void
  options: (key: string, value: any) => void
  onClose: (callback: VoidFunction) => void
  onOpen: (callback: (data: any) => void) => void
  onClick: (callback: (data: any) => void) => void
  clear: VoidFunction
}

class ReactWebengageNotification implements ReactWebengageNotificationInterface {
  render(value?: any) {
    value ? window.webengage.notification.render(value) : window.webengage.notification.render()
  }

  options(key: string, value: any) {
    window.webengage.notification.options(key, value)
  }

  onClose(callback: (data: any) => void) {
    window.webengage.notification.onClose(function (data) {
      callback(data)
    })
  }

  onOpen(callback: (data: any) => void) {
    window.webengage.notification.onOpen(function (data) {
      callback(data)
    })
  }

  onClick(callback: (data: any) => void) {
    window.webengage.notification.onClick(function (data) {
      callback(data)
    })
  }

  clear() {
    window.webengage.notification.clear()
  }
}

export default ReactWebengageNotification
