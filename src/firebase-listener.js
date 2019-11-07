importScripts("https://www.gstatic.com/firebasejs/6.4.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.4.2/firebase-messaging.js");

/**
 * @class PushlyFirebaseListener
 */
class PushlyFirebaseListener {

  /**
   * @constructor
   */
  constructor() {
    this.exeMessageApi = '';
    this.messageApi = '';
    this.subscriptionObject = {};
    this.url = '';
    this.launchUrl = '';
  }

  /**
   * Initialization method
   */
  init() {

    // To listen the messages pushed from service worker
    self.addEventListener('push', function (event) {
      var message = event.data.json();
      this.messageApi = message.data.message_api;
      this.subscriptionObject = message.data.subscription_object;
      this.launchUrl = message.data.launch_url;

      var obj = JSON.parse(message.data.notification);
      const title = obj.title;
      const options = {
        body: obj.body,
        icon: obj.icon,
      };
      if (message.data.action_button) {
        options["actions"] = JSON.parse(message.data.action_button)
      }

      event.waitUntil(self.registration.showNotification(title, options));
    });

    // To listen when user clicks on notification
    self.addEventListener('notificationclose', (event) => {
      const clickedNotification = event.notification;
      if (this.messageApi != this.exeMessageApi) {
        saveUserAction("close");
      }
    });

    // To listen when user closes notification
    self.addEventListener('notificationclick', function (event) {
      if (event.action) {
        PushlyFirebaseListener.url = event.action;
        //clients.openWindow(event.action)
      } else {
        PushlyFirebaseListener.url = PushlyFirebaseListener.launchUrl;
        //clients.openWindow(launch_url)
      }

      this.exeMessageApi = this.messageApi;
      const clickedNotification = event.notification;
      PushlyFirebaseListener.saveUserAction((event.action) ? event.action : "executed");

    });
  }

  /**
   * To make a network call and store messages in database
   */
  static saveUserAction = function (action_text) {
    const messagelog = {
      url: this.url,
      excutionText: action_text,
      message_api: this.messageApi,
      subscriptionObject: this.subscriptionObject
    }
    fetch("https://pushly.500apps.com/pushly/messagelog", {
      method: "post",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(messagelog),
    })
  }
}
(() => {
  var _pushlyFirebaseListener = new PushlyFirebaseListener()
  _pushlyFirebaseListener.init();
})();