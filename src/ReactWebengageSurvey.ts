export interface ReactWebengageSurveyInterface {
  render: (value?: any) => void
  options: (key: string, value: any) => void
  onOpen: (callback: (data: any) => void) => void
  onClose: (callback: (data: any) => void) => void
  onSubmit: (callback: (data: any) => void) => void
  onComplete: (callback: (data: any) => void) => void
  clear: VoidFunction
}

class ReactWebengageSurvey implements ReactWebengageSurveyInterface {
  render(value?: any) {
    value ? window.webengage.survey.render(value) : window.webengage.notification.render()
  }

  options(key: string, value: any) {
    window.webengage.survey.options(key, value)
  }

  onOpen(callback: (data: any) => void) {
    window.webengage.survey.onOpen(function (data) {
      callback(data)
    })
  }

  onClose(callback: (data: any) => void) {
    window.webengage.survey.onClose(function (data) {
      callback(data)
    })
  }

  onSubmit(callback: (data: any) => void) {
    window.webengage.survey.onClose(function (data) {
      callback(data)
    })
  }

  onComplete(callback: (data: any) => void) {
    window.webengage.survey.onClose(function (data) {
      callback(data)
    })
  }

  clear() {
    window.webengage.survey.clear()
  }
}

export default ReactWebengageSurvey
