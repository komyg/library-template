# One API SDK

This is a Typescript SDK for [The One API](https://the-one-api.dev/).

## Installation

To install the SDK, run the following command:

```bash
npm install komyg-one-api-sdk
```

## Minimum Requirements

This SDK, makes use of Node Fetch requires Node.js version 18 or higher, on the backend.

## Initialization

Before using the SDK, you must call the `init` function with your token. For example:

```ts
init({ authToken: 'my-token' });
```

If you don't have an access token you can generate one following these steps:

- First sign up [here](https://the-one-api.dev/sign-up).
- Then go to your [account](https://the-one-api.dev/account) page.

## Usage

Currently this SDK contains two functions, one to retrieve a list of movies and the other to retrieve a list of quotes.

### Movies

To retrieve a list of movies, call the `getMovies` function. For example:

```ts
const movies = await getMovies();
```

### Quotes

To retrieve a list of quotes, call the `getQuotes` function. For example:

```ts
const quotes = await getQuotes();
```

### Sorting, Filtering and Pagination

Both the `getMovies` and `getQuotes` functions accept an optional parameter of type `Options`. This parameter allows you to sort, filter and paginate the results.

#### Sorting

Sorting can be done on one field and in one direction (ascending or descending). For example, to sort the movies by name in ascending order, you would do the following:

```ts
const sortedMovies = await getMovies({
  sort: { field: 'name', order: 'asc' },
});
```

#### Pagination

Pagination can be done by specifying the page number and the number of results per page. For example, to get the second page of quotes with 10 results per page, you would do the following:

```ts
const paginatedQuotes = await getQuotes({
  pagination: { limit: 10, page: 2 },
});
```

#### Filtering

Filtering can be done by specifying the field to filter on and the values to filter by. For example, to get all quotes for _The Fellowship of the Ring_, you would do the following:

```ts
const quotesForTheFellowshipOfTheRing = await getQuotes({
  filters: [
    {
      field: 'movieId',
      values: ['5cd95395de30eff6ebccde5c'], // The Fellowship of the Ring Movie ID
      operator: 'eq',
    },
  ],
});
```

You can also use the filter to retrieve a single movie or quote:

```ts
const fellowshipOfTheRingMovie = await getMovies({
  filters: [
    {
      field: 'id',
      values: ['5cd95395de30eff6ebccde5c'], // The Fellowship of the Ring Movie ID
      operator: 'eq',
    },
  ],
});
```

You can have multiple filters:

```ts
const quotesFromGimliAndLegolasInTheTwoTowers = await getQuotes({
  filters: [
    {
      field: 'movieId',
      values: ['5cd95395de30eff6ebccde5b'],
      operator: 'eq',
    },
    {
      field: 'characterId',
      values: ['5cd99d4bde30eff6ebccfd23', '5cd99d4bde30eff6ebccfd81'],
      operator: 'eq',
    },
  ],
});
```

Finally you can use Regular Expressions on the filters:

```ts
const filterByRegex = await getMovies({
  filters: [{ field: 'name', values: [/fellowship/i], operator: 'eq' }],
});
```

##### Filter Operators

You can specify the following operators when filtering:

- `eq`: equal
- `neq`: not equal
- `gt`: greater than
- `gte`: greater than or equal
- `lt`: less than
- `lte`: less than or equal
