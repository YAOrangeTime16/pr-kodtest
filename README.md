# Pricerunner kodtest

```bash
  npm clone https://github.com/YAOrangeTime16/pr-kodtest.git

  npm install

  npm run start
```

## Tidsuppskattning

### 3 tim: Konfigration och Inställning

Jag googlade mycket på det första steget. Appen startade inte direkt. För att appen skulle fungera, la jag upp `.babelrc` och `.eslintrc`. Dessutom, har ett par plugin nedladdats för att tillåta 'arrow-function' och 'console.log'.

Eslint retunerade en compile-error på `server.js`, och lösningen hittades på dokumentationen om `webpackHotServerMiddleware`.

> The 'server' compiler must export a function in the form of `(options) => (req, res, next) => void`

### 1.5-2 tim: Data hämtning

Tog lite tid för att förstå formatet av datan som skickades ner till appen. I console-loggen visades datan i form av `Map` och `List` som jag inte riktigt kände till, och den visades inte upp till browsern. Till slut, fattade jag att det var `immutable.js` som gällde, och då använde jag metoderna `toJS()`, `Seq()` och `toArray()` utav `immutable.js`.

### 7 tim: Styling och Debugging

#### CSS GRID

I stilen använder jag CSS Grid för att formera sidan. Jag tänkte att det skulle vara bra när sidan separerades i olika block/komponenter, och de pusslades ihop till olika positioner beroende på skärm storlek. (T.ex. 'butiker' ligger på en annan sida på iphone och ipad/desktop).

#### NO IMAGE

Det fanns en bild som saknades i datan. Detta förstörde layouten. Jag fixade detta genom att lägga upp ett ersättande element.

#### LAZYLOAD

Jag använde ett npm packet, `react-lazy-load-image-component`, för att implementera lazyload av bilerna.
