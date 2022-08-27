---
title: Supabase
---

# Supabase

## How To
```js
import { useSupabaseClient } from '#imports
const supabase = useSupabaseClient()
```

## useSupabaseClient
### 1. Fetch data (select)
```js
// Fetch data from countries and select only id, name and cities
// and from cities only id and name.
const { data, error } = await supabase
  .from('countries')
  .select(`
    id,
    name,
    cities (id, name)
  `)


// Select all messages for a user (child table) called Jane. 
// * Filtering using child table.
const { data, error } = await supabase
  .from('messages')
  .select('*, users!inner(*)')
  .eq('users.username', 'Jane')


// Adding count option 
// if you don't want to return any rows, you can use 
// { count: 'exact', head: true }  
const { data, error, count } = await supabase
  .from('cities')
  .select('name', { count: 'exact' })
  

// If you have JSONB column you can query using:
const { data, error } = await supabase
  .from('users')
  .select(`
    id, name,
    address->street
  `)
  .eq('address->postcode', 90210)
```

### 2. Insert
```js
// Inserting single and multiple
const { data, error } = await supabase
  .from('cities')
  .insert([
    { name: 'The Shire', country_id: 554 }
    { name: 'Rohan', country_id: 555 },
  ])

// For upsert function or { upsert: true } option is primary key columns would need to be included in the data parameter in order for an update to properly happen
const { data, error } = await supabase
  .from('cities')
  .insert(
    [
      { name: 'The Shire', country_id: 554 },
      { name: 'Rohan', country_id: 555 },
      { name: 'City by the Bay', country_id:840}
    ],
    { upsert: true })
```

### 3. Update
```js
// Update name where name
const { data, error } = await supabase
  .from('cities')
  .update({ name: 'Middle Earth' })
  .match({ name: 'Auckland' })


// Update JSON data
const { data, error } = await supabase
  .from('users')
  .update(`
    address: { 
      street: 'Melrose Place',
      postcode: 90210
    }
  `)
  .eq('address->postcode', 90210)
```

### 4. Delete
```js
const { data, error } = await supabase
  .from('cities')
  .delete()
  .match({ id: 666 })
```

### 5. Modifiers
#### 1. limit()
```js
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .limit(1)

// with embedded resources
const { data, error } = await supabase
  .from('countries')
  .select('name, cities(name)')
  .eq('name', 'United States')
  .limit(1, { foreignTable: 'cities' })
```

#### 2. order()
```js
const { data, error } = await supabase
  .from('cities')
  .select('name', 'country_id')
  .order('id', { ascending: false })

// Multiple
const { data, error } = await supabase
  .from('cities')
  .select('name', 'country_id')
  .order('country_id', { ascending: false })
  .order('name', { ascending: false })
```

#### 3. range()
```js
// Limits the result to rows within the specified range, inclusive.
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .range(0,3)
```

#### 4. single() and maybeSingle()
```js
// Retrieves only one row
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .limit(1)
  .single()

// Retrieves at most one row from the result.
// Result must be at most one row (e.g. using eq on a UNIQUE column),
// otherwise this will result in an error.
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .eq('name', 'Singapore')
  .maybeSingle()
```

### 6. Filters
#### 1. or()
```js
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .or('id.eq.20,id.eq.30')

// Syntaxes
.or('id.in.(6,7), arraycol.cs.{"a","b"}')  // Use Postgres list () for in filter. Array {} for array column and 'cs' for contains.
.or(`id.in.(${arrList}),arraycol.cs.{${arr}}`)  // You can insert a javascipt array for list or array on array column.
.or(`id.in.(${arrList}),rangecol.cs.[${arrRange})`) // You can insert a javascipt array for list or range on a range column.

// or with and
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .or('id.gt.20,and(name.eq.New Zealand,name.eq.France)')

// or with foreignTable
const { data, error } = await supabase
  .from('countries')
  .select('id, cities(*)')
  .or('name.eq.Wellington,name.eq.Paris', { foreignTable: "cities" })
```

#### 2. not()
```js
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .not('name', 'eq', 'Paris')

// Syntaxes
  .not('name','eq','Paris')
  .not('arraycol','cs','{"a","b"}') // Use Postgres array {} for array column and 'cs' for contains.
  .not('rangecol','cs','(1,2]') // Use Postgres range syntax for range column.
  .not('id','in','(6,7)')  // Use Postgres list () for in filter.
  .not('id','in',`(${arr})`)  // You can insert a javascript array.
  
```
#### 3. match()
```js
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .match({name: 'Beijing', country_id: 156})
```

#### 4. eq() (equal) and neq() (Not equal)
```js
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .eq('name', 'The shire')
```
#### 5. gt() (greater than) and gte() (greater than and equal)
```js
// Finds all rows whose value on the stated column is greater than the specified value.
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .gt('country_id', 250)

// Finds all rows whose value on the stated column is greater than or equal to the specified value.
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .gte('country_id', 250)
```

#### 6. lt() (lower than) and lte() (lower than and equal)
```js
// Finds all rows whose value on the stated column is less than the specified value.
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .lt('country_id', 250)

// Finds all rows whose value on the stated column is less than or equal to the specified value.
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .lte('country_id', 250)
```

#### 7. like() and ilike()
```js
// Finds all rows whose value in the stated column matches the supplied pattern (case sensitive).
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .like('name', '%la%')

// Finds all rows whose value in the stated column matches the supplied pattern (case insensitive).
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .ilike('name', '%la%')
```

#### 8. is()
```js
// A check for exact equality (null, true, false), finds all rows whose value on the stated column exactly match the specified value.
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .is('name', null)
```

#### 9. in()
```js
// Finds all rows whose value on the stated column is found on the specified values.
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .in('name', ['Rio de Janeiro', 'San Francisco'])
```

#### 10. contains()
```js
// Works on array or range
const { data, error } = await supabase
  .from('countries')
  .select('name, id, main_exports')
  .contains('main_exports', ['oil'])

// Syntaxes
.contains('arraycol',["a","b"]) // You can use a javascript array for an array column
.contains('arraycol','{"a","b"}') // You can use a string with Postgres array {} for array column.
.contains('rangecol','(1,2]') // Use Postgres range syntax for range column.
.contains('rangecol',`(${arr}]`) // You can insert an array into a string.
```

#### 11. containedBy()
```js
const { data, error } = await supabase
  .from('countries')
  .select('name, id, main_exports')
  .containedBy('main_exports', ['cars', 'food', 'machine'])

// Syntaxes
.containedBy('arraycol',["a","b"]) // You can use a javascript array for an array column
.containedBy('arraycol','{"a","b"}') // You can use a string with Postgres array {} for array column.
.containedBy('rangecol','(1,2]') // Use Postgres range syntax for range column.
.containedBy('rangecol',`(${arr}]`) // You can insert an array into a string.
```

#### 12. rangeLt() and .rangeGt() and .rangeGte() and .rangeLte() and .rangeAdjacent()

```js
// rangeLt
const { data, error } = await supabase
  .from('countries')
  .select('name, id, population_range_millions')
  .rangeLt('population_range_millions', '[150, 250]')

// rangeGt
const { data, error } = await supabase
  .from('countries')
  .select('name, id, population_range_millions')
  .rangeGt('population_range_millions', '[150, 250]')

// rangeGte
const { data, error } = await supabase
  .from('countries')
  .select('name, id, population_range_millions')
  .rangeGte('population_range_millions', '[150, 250]')

// rangeLte
const { data, error } = await supabase
  .from('countries')
  .select('name, id, population_range_millions')
  .rangeLte('population_range_millions', '[150, 250]')

// rangeAdjacent
const { data, error } = await supabase
  .from('countries')
  .select('name, id, population_range_millions')
  .rangeAdjacent('population_range_millions', '[70, 185]')
```
#### 13. overlaps()
```js
const { data, error } = await supabase
  .from('countries')
  .select('name, id, main_exports')
  .overlaps('main_exports', ['computers', 'minerals'])
```

#### 14. textSearch()
```js
// Finds all rows whose tsvector value on the stated column matches to_tsquery(query).
const { data, error } = await supabase
  .from('quotes')
  .select('catchphrase')
  .textSearch('catchphrase', `'fat' & 'cat'`, { 
    config: 'english' 
  })

// Basic normalization
const { data, error } = await supabase
  .from('quotes')
  .select('catchphrase')
  .textSearch('catchphrase', `'fat' & 'cat'`, { 
    type: 'plain',
    config: 'english' 
  })

// Full normalization
const { data, error } = await supabase
  .from('quotes')
  .select('catchphrase')
  .textSearch('catchphrase', `'fat' & 'cat'`, { 
    type: 'phrase',
    config: 'english' 
  })

// Websearch
const { data, error } = await supabase
  .from('quotes')
  .select('catchphrase')
  .textSearch('catchphrase', `'fat or cat'`, { 
    type: 'websearch',
    config: 'english'
  })
```

#### 15. filter()
```js
// Finds all rows whose column satisfies the filter.
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .filter('name', 'in', '("Paris","Tokyo")')

// Syntaxes
  .filter('arraycol','cs','{"a","b"}') // Use Postgres array {} for array column and 'cs' for contains.
  .filter('rangecol','cs','(1,2]') // Use Postgres range syntax for range column.
  .filter('id','in','(6,7)')  // Use Postgres list () for in filter.
  .filter('id','in',`(${arr})`)  // You can insert a javascript array.

```


### 7. Realtime
#### 1. on().subscribe()
```js
// Listen for everything happened in database
const mySubscription = supabase
  .from('*')
  .on('*', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()

// Listening on insert and delete events in countries table
const mySubscription = supabase
  .from('countries')
  .on('INSERT', handleRecordInserted)
  .on('DELETE', handleRecordDeleted)
  .subscribe()

// Listen to row level. When a row updated and handleRecordInserted
// id of countries equal to 200
const mySubscription = supabase
  .from('countries:id=eq.200')
  .on('UPDATE', handleRecordUpdated)
  .subscribe()
```

#### 2. removeSubscription() and removeAllSubscriptions()
```js
supabase.removeSubscription(mySubscription)
supabase.removeAllSubscriptions()


```

#### 3. getSubscriptions()
```js
const subscriptions = supabase.getSubscriptions()
```