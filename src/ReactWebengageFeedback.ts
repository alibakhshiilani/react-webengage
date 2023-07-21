export interface ReactWebengageFeedbackInterface {
  onClose: (callback: (data: any) => void) => void
  onSubmit: (callback: (data: any) => void) => void
  onOpen: (callback: (data: any) => void) => void
}

class ReactWebengageFeedback implements ReactWebengageFeedbackInterface {
  onClose(callback: (data: any) => void) {
    window.webengage.feedback.onClose(function (data) {
      callback(data)
    })
  }

  onOpen(callback: (data: any) => void) {
    window.webengage.feedback.onOpen(function (data) {
      callback(data)
    })
  }

  onSubmit(callback: (data: any) => void) {
    window.webengage.feedback.onSubmit(function (data) {
      callback(data)
    })
  }
}

export default ReactWebengageFeedback
