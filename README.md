# React WebEngage

A TypeScript/JavaScript library for integrating the WebEngage SDK in React applications.

this library also fix react router history.replace bug when using webengage

## Installation

To install the library, run the following command:

`npm i react-webengage`

or

`yarn add react-webengage`

## Usage

To use the library, import the `ReactWebengage` class from the package and create an instance with your WebEngage licence key and other optional props:

```javascript
import ReactWebengage from 'react-webengage'

const webengage = new ReactWebengage({
  licence: 'your-webengage-licence-key',
  is_spa: true, // or false
})

webengage.init()
```

You can then call the various methods of the webengage instance to perform actions such as logging in a user, tracking events, setting user attributes, logging out the user, and reloading the WebEngage SDK:

```
webengage.login('user-id');
webengage.addTrack('event-name', { eventProperty: 'value' });
webengage.setAttribute('attribute-key', { attributeObject: 'value' });
webengage.logout();
webengage.reload();
```

For more details on the available methods and their arguments, refer to the documentation below.

## API

ReactWebengageInterface

This is the interface for the ReactWebengage class.

`init(w: Window = window, e: Document = document, b: string = 'webengage'): void`

Initializes the WebEngage SDK with the provided licence key.

`login(id: string): void`

Logs in the user with the specified ID.

`addTrack(eventName: string, eventData: any): void`

Tracks an event with the specified name and data.

`setAttribute(key: string, value: object): void`

Sets a user attribute with the specified key and value.

`logout(): void`

Logs out the current user.

`reload(): boolean`

Reloads the WebEngage SDK. Returns true if the reload was successful, false otherwise.

ReactWebengageProps

This is the interface for the props accepted by the ReactWebengage class.

`licence: string`

The WebEngage licence key.

`is_spa: boolean`

Optional. Indicates whether the application is a single-page application. Defaults to true.

## Contributing

Contributions are welcome! Please follow the guidelines in the CONTRIBUTING.md file for code formatting, testing, and pull requests.

## License

This library is licensed under the MIT License. See the LICENSE file for more details.
