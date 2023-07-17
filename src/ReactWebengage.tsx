declare global {
  interface Window {
    webengage: {
      init: (id: string) => void
      user:{
        login: (username: string) => {}
        setAttribute: (key: string, value: Object) => {}
        logout: VoidFunction
      }
      track: (eventName: string, eventAttributes?: any) => void
      onReady: (callback: VoidFunction) => void
    }
  }
}

export interface ReactWebengageInterface {
  init: any;
  login: (id: string) => void;
  setAttribute: (key: string, value: object) => void;
  addTrack: any;
  logout: () => void;
  onReady: (callback: () => void) => void;
}

export interface ReactWebengageProps {
  licence: string;
  is_spa: boolean;
}

class ReactWebengage implements ReactWebengageInterface {

  private licence:string
  private is_spa:boolean

  constructor(props:ReactWebengageProps){
    this.is_spa = props.is_spa || true
    this.licence = props.licence;
  }

  init(w:any = window, e:any = document, b:string = 'webengage') {
    function o(e:any, t:any) {
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
            is_spa: this.is_spa ? 1 : 0,
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

  
    if(this.is_spa){
      window.webengage.onReady(() => {
        const webengageHistoryReplace = window.history.replaceState
  
        window.history.replaceState = (...args) => {
          webengageHistoryReplace(...args)
          Object.getPrototypeOf(window.history).replaceState.apply(window.history, args)
        }
      })
    }
  }


  login(id:string){
    window.webengage.user.login(id);
  }

  addTrack(eventName:string,eventData:any){
    window.webengage.track(eventName, [eventData]);
  }

  setAttribute(key: string, value: Object){
    window.webengage.user.setAttribute(key,value)
  }

  logout(){
    window.webengage.user.logout()
  }

  onReady(callback:VoidFunction){
    window.webengage.onReady(()=>{
      callback()
    })
  }

}

export default ReactWebengage;