import ReactWebengageNotification, { ReactWebengageNotificationInterface } from './ReactWebengageNotification'
import ReactWebengageWebpush, { ReactWebengageWebpushInterface } from './ReactWebengageWebpush'

export interface ReactWebengageInterface {
  init: any
  options: (key: string, value: any) => void
  login: (id: string) => void
  setAttribute: (key: string, value: object) => void
  addTrack: any
  logout: () => void
  reload: () => boolean
  onReady: (callback: VoidFunction) => void
}

export interface ReactWebengageProps {
  licence: string
  is_spa?: boolean
}

declare global {
  interface Window {
    webengage: {
      init: (id: string) => void
      onSessionStarted: (callback: Function) => void
      options: (key: string, value: any) => void
      user: {
        login: (username: string) => {}
        setAttribute: (key: string, value: Object) => {}
        logout: VoidFunction
      }
      feedback: {
        onClose: (callback: (data: any) => void) => void
        onSubmit: (callback: (data: any) => void) => void
        onOpen: (callback: (data: any) => void) => void
      }
      webpush: {
        prompt: Function
        subscribe: Function
        isSubscribed: () => boolean
        isPushNotificationsSupported: (callback: (supported: boolean) => void) => void
        onSubscribe: (callback: VoidFunction) => void
      }
      notification: {
        render: Function
        options: (key: string, value: any) => void
        onClose: (callback: (data: any) => void) => void
        onOpen: (callback: (data: any) => void) => void
        onClick: (callback: (data: any) => void) => void
        clear: Function
      }
      survey: {
        render: Function
        options: (key: string, value: any) => void
        onClose: (callback: (data: any) => void) => void
        onOpen: (callback: (data: any) => void) => void
        onSubmit: (callback: (data: any) => void) => void
        onComplete: (callback: (data: any) => void) => void
        clear: Function
      }
      track: (eventName: string, eventAttributes?: any) => void
      reload: VoidFunction
      onReady: (callback: VoidFunction) => void
    }
  }
}

class ReactWebengage implements ReactWebengageInterface {
  private licence: string
  private is_spa: boolean
  public webpush: ReactWebengageWebpushInterface
  public notification: ReactWebengageNotificationInterface

  constructor(props: ReactWebengageProps) {
    this.is_spa = props.is_spa || true
    this.licence = props.licence
    this.webpush = new ReactWebengageWebpush()
    this.notification = new ReactWebengageNotification()
  }

  init(w: any = window, e: any = document, b: string = 'webengage') {
    function o(e: any, t: any) {
      e[t[t.length - 1]] = function () {
        r.__queue.push([t.join('.'), arguments])
      }
    }
    var i,
      s,
      r = w[b],
      z = ' ',
      l = 'init options track screen onReady'.split(z),
      a = 'feedback survey notification'.split(z),
      c = 'options render clear abort'.split(z),
      p = 'Open Close Submit Complete View Click'.split(z),
      u = 'identify login logout setAttribute'.split(z)
    if (!r || !r.__v) {
      for (
        w[b] = r =
          {
            __queue: [],
            is_spa: 0, // original spa will make window.history.replace crash , we used spaSupport method instead
            __v: '6.0',
            user: {},
          },
          i = 0;
        i < l.length;
        i++
      )
        o(r, [l[i]])
      for (i = 0; i < a.length; i++) {
        for (r[a[i]] = {}, s = 0; s < c.length; s++) o(r[a[i]], [a[i], c[s]])
        for (s = 0; s < p.length; s++) o(r[a[i]], [a[i], 'on' + p[s]])
      }
      for (i = 0; i < u.length; i++) o(r.user, ['user', u[i]])
      setTimeout(function () {
        var f = e.createElement('script'),
          d = e.getElementById('_webengage_script_tag')
        ;(f.type = 'text/javascript'),
          (f.async = !0),
          (f.src =
            ('https:' == e.location.protocol
              ? 'https://widgets.ir0.webengage.com'
              : 'http://widgets.ir0.webengage.com') + '/js/webengage-min-v-6.0.js'),
          //@ts-ignore
          d.parentNode.insertBefore(f, d)
      })
    }
    window.webengage.init(this.licence)

    if (this.is_spa) {
      this.spaSupport()
    }
  }

  onSessionStarted(callback: Function) {
    window.webengage.onSessionStarted(callback)
  }

  options(key: string, value: any) {
    window.webengage.options(key, value)
  }

  private spaSupport() {
    window.history.pushState = function pushState(...args) {
      window.dispatchEvent(new Event('locationchange'))
      return Object.getPrototypeOf(window.history).pushState.apply(window.history, args)
    }

    window.history.replaceState = function replaceState(...args) {
      window.dispatchEvent(new Event('locationchange'))
      return Object.getPrototypeOf(window.history).replaceState.apply(window.history, args)
    }

    window.addEventListener('popstate', () => {
      window.dispatchEvent(new Event('locationchange'))
    })

    window.addEventListener('locationchange', this.reload)
  }

  login(id: string) {
    window.webengage.user.login(id)
  }

  addTrack(eventName: string, eventData: any) {
    window.webengage.track(eventName, [eventData])
  }

  setAttribute(key: string, value: Object) {
    window.webengage.user.setAttribute(key, value)
  }

  logout() {
    window.webengage.user.logout()
  }

  onReady(callback: VoidFunction) {
    window.webengage.onReady(function () {
      callback()
    })
  }

  reload() {
    if (window?.webengage?.reload) {
      setTimeout(function () {
        window?.webengage?.reload()
      }, 500)
      return true
    }
    return false
  }
}

export default ReactWebengage
