type NameProp = {
  name: string;
  isLoggedIn: boolean;
};

export function Test({ name, isLoggedIn }: NameProp) {
  const loggedIn = <h1>Welcome home {name}</h1>;
  const guest = <h1>please log in</h1>;

  return isLoggedIn ? loggedIn : guest;
}

Test.defaultProps = {
  name: "Guest",
  isLoggedIn: false,
};
