# Standard Library

Bf6mods has a work in progress standard library. If you have any recommendations, or useful functions, we would be interested in adding it in.

## Usage

You can use the standard library by just importing the functions you wish to use.

```ts
import { CountdownUI } from '@bf6mods/sdk/std'

const countdown = new CountdownUI(playerId);
countdown.open('Starting countdown', 10);
```

The full list of functions available in the standard library can be found [here](https://github.com/bf6mods/bf6mods/blob/main/packages/sdk/src/std/index.ts).
