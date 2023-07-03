export interface Hello {
  name: string;
  result: string;
}

export function hello(name: string): Hello {
  return {
    name,
    result: `Hello, ${name}!`,
  };
}
