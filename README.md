# tslodash

## Description

Implementing functions similar to lodash using typescript and have test functions for each function

## Usage

### object

#### getTag

```ts
import * as _ from 'tslodash'

_.getTag(null)
// => [object Null]

```

#### isLength

```ts
import * as _ from 'tslodash'
import {isLength} from 'tslodash/lang'

_.isLength(3)
// => true

isLength(Number.MAX_VALUE)
// => false

_.isLength(Number.MAX_SAFE_INTEGER)
// => true

_.isLength('3')
// => false
```

#### isArrayLike

```ts
import * as _ from 'tslodash'

isArrayLike([1, 2, 3])
// => true

isArrayLike('abc')
// => true

isArrayLike(Function)
// => false
```