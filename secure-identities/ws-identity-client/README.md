# Client for web-socket identity servers

This is a node.js client to connect with the web-socket identity server [ws-identity](https://github.com/brioux/ws-identity).


## Requesting new session Id 
  - Submit pubKeyHex to socket server and receice ws-identity session ticket
```typescript
  const wsSessionBackend = new WsIdentityClient({
    endpoint: [ws-server-address],
    pathPrefix: "/session",
  });
const sessionId = wsSessionBackend.write("new",{pubKeyHex: [pub-key-hex]});
```