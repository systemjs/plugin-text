text
===========

SystemJS's text loading plugin. Text is loaded from the file into the variable as a string.

Installation
---

```bash
jspm install text
```

Basic Use
---

```javascript
import myText from './mytext.html!text';
```

Unsupported syntax
---

```javascript
// Do not do this
// Avoid curly brackets when using this plugin
import {myText} from './mytext.html!text';
```
