type Weapon = {
  id: number;
  name: string;
  damage: number;
};

type ListProps = {
  items: Weapon[];
  category: string;
};

export function List(props: ListProps) {
  const category = props.category;

  //取App.tsx那里的items
  const itemList = props.items;

  // Map through the items array
  const listItem = itemList.map((weapon) => {
    return (
      <li key={weapon.id}>
        {weapon.name}: <u>{weapon.damage}</u>
      </li>
    );
  });

  // Render the list
  return (
    <>
      <h3>{category}</h3>
      <ul>{listItem}</ul>
    </>
  );
}

List.defaultProps = {
  category: "category",
  items: [],
};
