# React

### what is React

- React is javascript library
- the main focus is building UI as fast as possible
- so this is used to single page application
- means complete website in single page

### why react is fast

- virtual Dom update only required list
- react dom update complete list

### why learn react

- maintained by facebook so it will long term player in the market
- hight demand due to fast speed
- large community for your support
- mobile app development with react-native

### History and version

- maintained by facebook
- first release on 29 May 2013
- Apps with react is netflix, whatsapp web, instagram, airbnb etc

### react js without installation

- React is generally used with npm
- But we can also use CDN
- Make Example with React CDN

#### without react installation

```js
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <div id="mydiv"></div>

    <script type="text/babel">
      class Hello extends React.Component {
        render() {
          return <div>Hello React with code</div>;
        }
      }

      const root = ReactDOM.createRoot(document.getElementById("mydiv"));
      root.render(<Hello />);
    </script>
  </body>
</html>

```

## 📌 Difference Between `package.json` and `package-lock.json`

### ✅ `package.json`

`package.json` is the main configuration file of a Node.js project.

It contains:

- Project details (name, version, description)
- Scripts (`start`, `build`, `test`, etc.)
- Dependencies and devDependencies (package names + version range)

Example:

```json
{
  "dependencies": {
    "react": "^18.0.0"
  }
}
```

| Feature      | `package.json`                 | `package-lock.json`            |
| ------------ | ------------------------------ | ------------------------------ |
| Purpose      | Defines project & dependencies | Locks exact installed versions |
| Created by   | Developer                      | npm automatically              |
| Version type | Range (`^18.0.0`)              | Exact (`18.2.0`)               |
| Editable     | ✅ Yes                         | ❌ No                          |
| Use case     | Manage dependencies            | Same install for everyone      |
